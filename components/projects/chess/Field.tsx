import React from "react";
import { FieldType } from "types/Chess";
import styles from "@styles/Chess.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChessKing } from "@fortawesome/free-solid-svg-icons";

interface FieldProps {
  field: FieldType;
}

const Field = ({ field }: FieldProps) => {
  console.log(field);

  return (
    <div
      className={styles.fieldContainer}
      style={{ backgroundColor: field.isColorWhite ? "white" : "green" }}
    >
      {field.piece && (
        <FontAwesomeIcon
          icon={faChessKing}
          style={{ color: field.piece.isWhite ? "white" : "black" }}
        />
      )}
    </div>
  );
};

export default Field;
