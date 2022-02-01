import React, { useEffect, useState } from "react";
import { FieldType } from "types/Chess";
import styles from "@styles/Chess.module.scss";
import Piece from "./Piece";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { selectPiece } from "@actions/chessActions/selectPiece";
import { movePiece } from "@actions/chessActions/movePiece";

const whiteSquareColor = "#eae9d2";
const blackSquareColor = "#4b7399";
const selectedSquareColor = "#75c7e8";
const highlightedSquareColor = "#cb655f";

const Field = ({ position, piece, isAllowed, isColorWhite }: FieldType) => {
  const [isFieldSelected, setIsFieldSelected] = useState<boolean>(false);
  const [fieldColor, setFieldColor] = useState<string>(whiteSquareColor);

  const dispatch = useDispatch();

  const { selectedPiece, isWhiteMove } = useSelector(
    (state: AppState) => state.chessReducer
  );

  const handleFieldHighlight = (e: React.MouseEvent<HTMLDivElement>): void => {
    e.preventDefault();
    setIsFieldSelected(!isFieldSelected);
    if (!isFieldSelected) setFieldColor(highlightedSquareColor);
    else setFieldColor(isColorWhite ? whiteSquareColor : blackSquareColor);
  };

  const handleFieldClick = (): void => {
    // if no piece is selected then select one in current color
    if (piece !== null && piece.isWhite === isWhiteMove) {
      dispatch(selectPiece(piece));
    } else {
      // if the field is allowed and piece is selected then move it
      if (selectedPiece !== null && isAllowed) {
        dispatch(movePiece(selectedPiece, position));
      }
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
