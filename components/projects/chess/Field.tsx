import React, { useEffect, useState } from "react";
import { FieldType } from "types/Chess";
import styles from "@styles/Chess.module.scss";
import Piece from "./Piece";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { selectPiece } from "@actions/chessActions/selectPiece";

const whiteSquareColor = "#eae9d2";
const blackSquareColor = "#4b7399";
const selectedSquareColor = "#75c7e8";
const highlightedSquareColor = "#cb655f";

const Field = ({ position, piece, isAllowed, isColorWhite }: FieldType) => {
  const [isFieldSelected, setIsFieldSelected] = useState<boolean>(false);
  const [fieldColor, setFieldColor] = useState(whiteSquareColor);

  const dispatch = useDispatch();

  const { selectedPiece } = useSelector(
    (state: AppState) => state.chessReducer
  );

  const handleFieldHighlight = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsFieldSelected(!isFieldSelected);
    if (!isFieldSelected) setFieldColor(highlightedSquareColor);
    else setFieldColor(isColorWhite ? whiteSquareColor : blackSquareColor);
  };

  const handleFieldClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (piece !== null) {
      dispatch(selectPiece(piece));
    }
  };

  useEffect(() => {
    if (selectedPiece !== null) {
      const [pieceX, pieceY] = selectedPiece?.position;
      const [x, y] = position;
      if (pieceX === x && pieceY === y) setFieldColor(selectedSquareColor);
      else setFieldColor(isColorWhite ? whiteSquareColor : blackSquareColor);
    }
  }, [selectedPiece]);

  useEffect(() => {
    setFieldColor(isColorWhite ? whiteSquareColor : blackSquareColor);
  }, [isColorWhite]);

  return (
    <div
      className={styles.fieldContainer}
      style={{
        backgroundColor: fieldColor,
      }}
      onContextMenu={handleFieldHighlight}
      onClick={handleFieldClick}
    >
      {piece && <Piece {...piece} />}
      {isAllowed && <div className={styles.allowed}></div>}
    </div>
  );
};

export default Field;
