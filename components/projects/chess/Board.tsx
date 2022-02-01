import React, { useEffect, useState } from "react";
import { pieces } from "./InitialPieces";
import styles from "@styles/Chess.module.scss";
import { FieldType, PieceName } from "types/Chess";
import Field from "./Field";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { changeBoardState } from "@actions/chessActions/changeBoardState";

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
          isAllowed: false,
          piece: getPieces(i, j),
          position: [i, j],
        };
        row.push(field);
      }
      board.push(row);
    }
    dispatch(changeBoardState(board));
  }, []);

  const isPieceAllowedToMove = (
    x: number,
    y: number,
    isWhite: boolean,
    newBoardState: FieldType[][]
  ): void => {
    if (0 <= x && x < 8 && 0 <= y && y < 8) {
      if (newBoardState[x][y].piece?.isWhite !== isWhite)
        newBoardState[x][y].isAllowed = true;
    }
  };

  useEffect(() => {
    if (selectedPiece !== null) {
      let newBoard = board.map((row) => {
        return row.map((field) => {
          field.isAllowed = false;
          return field;
        });
      });
      const { name, position, isWhite, isFirstMove } = selectedPiece;
      const [x, y] = position;
      switch (name) {
        case PieceName.Queen:
          break;
        case PieceName.Bishop:
          break;
        case PieceName.Knight:
          const allowedMoves = [
            [1, 2],
            [2, 1],
            [2, -1],
            [1, -2],
            [-1, -2],
            [-2, -1],
            [-2, 1],
            [-1, 2],
          ];
          allowedMoves.map((move) => {
            const moveX = x + move[0];
            const moveY = y + move[1];
            isPieceAllowedToMove(moveX, moveY, isWhite, newBoard);
          });
          break;
        case PieceName.Rook:
          break;
        case PieceName.Pawn:
          if (isWhite) {
            if (isFirstMove) newBoard[x - 2][y].isAllowed = true;
            newBoard[x - 1][y].isAllowed = true;
          } else {
            if (isFirstMove) newBoard[x + 2][y].isAllowed = true;
            newBoard[x + 1][y].isAllowed = true;
          }
          break;
        default:
          break;
      }
      dispatch(changeBoardState(board));
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
