import {
  ChessActionsTypes,
  CHANGE_BOARD_STATE,
  MOVE_PIECE,
  SELECT_PIECE,
  START_GAME,
  END_GAME,
} from "types/actions";
import { ChessGame, PieceName } from "types/Chess";

const initState: ChessGame = {
  board: [],
  selectedPiece: null,
  isWhiteMove: true,
  isStarted: false,
  timeWhite: 180,
  timeBlack: 180,
};

const chessReducer = (
  state = initState,
  action: ChessActionsTypes
): ChessGame => {
  switch (action.type) {
    case CHANGE_BOARD_STATE:
      return {
        ...state,
        board: action.board,
      };
    case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.selectedPiece,
      };
    case MOVE_PIECE:
      const newBoard = state.board.map((row) => {
        return row.map((field) => {
          field.isMoveAllowed = false;
          field.isCastlingAllowed = false;
          field.isEnPassantAllowed = false;
          return field;
        });
      });
      const { piece, positionAfterMove } = action;
      const [beforeX, beforeY] = piece.position;
      const [afterX, afterY] = positionAfterMove;
      // check is it first move pawn 2 fields (en passant enable)
      if (
        piece.name === PieceName.Pawn &&
        piece.isFirstMove &&
        (afterX === 3 || afterX === 4)
      ) {
        newBoard[beforeX + (piece.isWhite ? -1 : 1)][
          beforeY
        ].isEnPassantAllowed = true;
      }
      piece.position = positionAfterMove;
      piece.isFirstMove = false;
      newBoard[beforeX][beforeY].piece = null;
      newBoard[afterX][afterY].piece = piece;
      return {
        ...state,
        board: newBoard,
        selectedPiece: null,
        isWhiteMove:
          piece === state.selectedPiece
            ? !state.isWhiteMove
            : state.isWhiteMove,
      };
    case START_GAME:
      return { ...state, isStarted: true };
    case END_GAME:
      return { ...state, isStarted: false };
    default:
      return { ...state };
  }
};

export default chessReducer;
