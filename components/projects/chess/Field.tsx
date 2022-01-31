import React, { useState } from "react";
import { FieldType } from "types/Chess";
import styles from "@styles/Chess.module.scss";
import Piece from "./Piece";
import { useSelector } from "react-redux";
import { AppState } from "store";

interface FieldProps {
  field: FieldType;
}

const Field = ({ field }: FieldProps) => {
  const [isFieldSelected, setIsFieldSelected] = useState<boolean>(false);

  const { selectedPiece } = useSelector(
    (state: AppState) => state.chessReducer
  );

  const handleFieldHighlight = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFieldSelected(!isFieldSelected);
  };

  const handleFieldClick = (e: React.MouseEvent<HTMLDivElement>) => {
    console.log(piece);
  };

  const { piece } = field;

  return (
    <div
      className={styles.fieldContainer}
      style={{
        backgroundColor: isFieldSelected
          ? "red"
          : field.isColorWhite
          ? "white"
          : "green",
      }}
      onContextMenu={handleFieldHighlight}
      onClick={handleFieldClick}
    >
      {piece && <Piece {...piece} />}
    </div>
  );
};

export default Field;
