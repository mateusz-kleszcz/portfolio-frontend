import React, { useEffect, useState } from "react";
import { pieces } from "./InitialPieces";
import styles from "@styles/Chess.module.scss";
import { FieldType, PieceName } from "types/Chess";
import Field from "./Field";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { changeBoardState } from "@actions/chessActions/changeBoardState";
import { markAllowedFields } from "./markAllowedFields";

const getPieces = (i: number, j: number) => {
  const piece = pieces.find(
    (piece) => piece.position[0] === i && piece.position[1] === j
  );
  return piece ? piece : null;
};

const Board = () => {
  const dispatch = useDispatch();

  const { selectedPiece } = useSelector(
    (state: AppState) => state.chessReducer
  );

  const { board } = useSelector((state: AppState) => state.chessReducer);

  useEffect(() => {
    // get initial board and pieces
    const board: FieldType[][] = [];
    for (let i = 0; i < 8; i++) {
      const row: FieldType[] = [];
      for (let j = 0; j < 8; j++) {
        const isColorWhiteNumber = j % 2 ? i % 2 : (i + 1) % 2;
        const isColorWhite: boolean = isColorWhiteNumber ? true : false;
        const field: FieldType = {
          isColorWhite,
          isMoveAllowed: false,
          isCastlingAllowed: false,
          piece: getPieces(i, j),
          position: [i, j],
        };
        row.push(field);
      }
      board.push(row);
    }
    dispatch(changeBoardState(board));
  }, []);

  useEffect(() => {
    if (selectedPiece !== null) {
      const newBoard = markAllowedFields(selectedPiece, board);
      dispatch(changeBoardState(newBoard));
    }
  }, [selectedPiece]);

  return (
    <div className={styles.board}>
      {board.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map((field, index) => (
            <Field {...field} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
