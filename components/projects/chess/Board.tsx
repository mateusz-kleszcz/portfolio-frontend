import React, { useEffect } from "react";
import { pieces } from "./InitialPieces";
import styles from "@styles/Chess.module.scss";
import { FieldType } from "types/Chess";
import Field from "./Field";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { changeBoardState } from "@actions/chessActions/changeBoardState";
import { DragDropContext, DropResult, DragStart } from "react-beautiful-dnd";
import { selectPiece } from "@actions/chessActions/selectPiece";
import { movePiece } from "@actions/chessActions/movePiece";
import { checkPieceMoves } from "./ChessEngine";
import Controls from "./Controls";

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

  const { board, isWhiteMove } = useSelector(
    (state: AppState) => state.chessReducer
  );

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
          isEnPassantAllowed: false,
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
      const newBoard = checkPieceMoves(selectedPiece, board, isWhiteMove);
      dispatch(changeBoardState(newBoard));
    }
  }, [selectedPiece]);

  const handleDragEnd = (result: DropResult): void => {
    const after = result.destination?.droppableId.split("x").map(Number);
    if (after !== undefined && selectedPiece !== null) {
      const [x, y] = after;
      if (
        (x !== selectedPiece.position[0] || y !== selectedPiece.position[1]) &&
        selectedPiece.isWhite === isWhiteMove &&
        board[x][y].isMoveAllowed
      )
        dispatch(movePiece(selectedPiece, [x, y]));
    }
  };

  const handleDragStart = (initial: DragStart): void => {
    const [x, y] = initial.draggableId.split("x").map(Number);
    const piece = board[x][y].piece;
    if (piece !== null && piece.isWhite === isWhiteMove)
      dispatch(selectPiece(piece));
  };

  return (
    <div className={styles.boardContainer}>
      <div className={styles.board}>
        <DragDropContext
          onDragEnd={handleDragEnd}
          onDragStart={handleDragStart}
        >
          {board.map((row, index) => (
            <div className={styles.row} key={index}>
              {row.map((field, index) => (
                <Field {...field} key={index} />
              ))}
            </div>
          ))}
        </DragDropContext>
      </div>
      <Controls />
    </div>
  );
};

export default Board;
