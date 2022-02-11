import React, { useEffect, useState } from "react";
import { FieldType, PieceName, PieceType } from "types/Chess";
import styles from "@styles/Chess.module.scss";
import Piece from "./Piece";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { selectPiece } from "@actions/chessActions/selectPiece";
import { movePiece } from "@actions/chessActions/movePiece";
import { Droppable } from "react-beautiful-dnd";
import useChessAudio from "hooks/useChessAudio";

const whiteSquareColor = "#eae9d2";
const blackSquareColor = "#4b7399";
const selectedSquareColor = "#75c7e8";
const highlightedSquareColor = "#cb655f";

const Field = ({
  position,
  piece,
  isMoveAllowed,
  isCastlingAllowed,
  isEnPassantAllowed,
  isColorWhite,
}: FieldType) => {
  const [isFieldSelected, setIsFieldSelected] = useState<boolean>(false);
  const [fieldColor, setFieldColor] = useState<string>(whiteSquareColor);

  const [moveEffectPlaying, moveEffectToggle] = useChessAudio("MOVE");
  const [castleEffectPlaying, castleEffectToggle] = useChessAudio("CASTLE");

  const dispatch = useDispatch();

  const { selectedPiece, isWhiteMove, board } = useSelector(
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
      const [x, y] = position;
      // if the field is allowed and piece is selected then move it
      if (selectedPiece !== null && isMoveAllowed) {
        moveEffectToggle();
        dispatch(movePiece(selectedPiece, position));
      }
      if (selectedPiece !== null && isCastlingAllowed) {
        castleEffectToggle();
        dispatch(movePiece(selectedPiece, position));
        const rook: PieceType =
          y === 2 ? board[x][0].piece! : board[x][7].piece!;
        const rookNewPositionY = y === 2 ? 3 : 5;
        dispatch(movePiece(rook, [x, rookNewPositionY]));
      }
      if (selectedPiece?.name === PieceName.Pawn && isEnPassantAllowed) {
        dispatch(movePiece(selectedPiece, position));
        board[x + (selectedPiece.isWhite ? 1 : -1)][y].piece = null;
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
    <Droppable droppableId={`${position[0]}x${position[1]}`}>
      {(provided, snapshot) => (
        <div {...provided.droppableProps} ref={provided.innerRef}>
          <div
            className={styles.fieldContainer}
            style={{
              backgroundColor: fieldColor,
            }}
            onContextMenu={handleFieldHighlight}
            onClick={handleFieldClick}
          >
            {piece && <Piece {...piece} />}
            {(isMoveAllowed || isCastlingAllowed) && (
              <div className={styles.allowed}></div>
            )}
          </div>
          <span style={{ display: "none" }}>{provided.placeholder}</span>
        </div>
      )}
    </Droppable>
  );
};

export default Field;
