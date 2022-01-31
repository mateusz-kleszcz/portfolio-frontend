import React, { useEffect, useState } from "react";
import { pieces } from "./InitialPieces";
import styles from "@styles/Chess.module.scss";
import { FieldType } from "types/Chess";
import Field from "./Field";

const getPieces = (i: number, j: number) => {
  const piece = pieces.find(
    (piece) => piece.position[0] === i && piece.position[1] === j
  );
  return piece ? piece : null;
};

const Board = () => {
  const [boardState, setBoardState] = useState<FieldType[][]>([]);

  useEffect(() => {
    const board: FieldType[][] = [];
    for (let i = 0; i < 8; i++) {
      const row: FieldType[] = [];
      for (let j = 0; j < 8; j++) {
        const isColorWhiteNumber = j % 2 ? i % 2 : (i + 1) % 2;
        const isColorWhite: boolean = isColorWhiteNumber ? true : false;
        const field: FieldType = {
          isColorWhite,
          piece: getPieces(i, j),
        };
        row.push(field);
      }
      board.push(row);
    }
    setBoardState(board);
  }, []);

  return (
    <div className={styles.board}>
      {boardState.map((row, index) => (
        <div className={styles.row} key={index}>
          {row.map((field, index) => (
            <Field field={field} key={index} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default Board;
