import React, { useEffect, useState } from "react";
import { pieces } from "./InitialPieces";
import styles from "@styles/Chess.module.scss";
import { FieldType, PieceName, PieceType } from "types/Chess";
import Field from "./Field";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";

const getPieces = (i: number, j: number) => {
  const piece = pieces.find(
    (piece) => piece.position[0] === i && piece.position[1] === j
  );
  return piece ? piece : null;
};

const Board = () => {
  const [boardState, setBoardState] = useState<FieldType[][]>([]);

  const { selectedPiece } = useSelector(
    (state: AppState) => state.chessReducer
  );

  useEffect(() => {
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
    setBoardState(board);
  }, []);

  useEffect(() => {
    if (selectedPiece !== null) {
      let newBoardState = boardState.map((row) => {
        return row.map((field) => {
          field.isAllowed = false;
          return field;
        });
      });
      const { name, position, isWhite, isFirstMove } = selectedPiece;
      switch (name) {
        case PieceName.Queen:
          break;
        case PieceName.Bishop:
          break;
        case PieceName.Knight:
          break;
        case PieceName.Rook:
          break;
        case PieceName.Pawn:
          const [x, y] = position;
          if (isWhite) {
            if (isFirstMove) newBoardState[x - 2][y].isAllowed = true;
            newBoardState[x - 1][y].isAllowed = true;
          } else {
            if (isFirstMove) newBoardState[x + 2][y].isAllowed = true;
            newBoardState[x + 1][y].isAllowed = true;
          }

          break;
        default:
          break;
      }
      setBoardState(newBoardState);
    }
  }, [selectedPiece]);

  return (
    <div className={styles.board}>
      {boardState.map((row, index) => (
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
