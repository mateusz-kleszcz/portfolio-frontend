import {
  ChessActionsTypes,
  CHANGE_BOARD_STATE,
  MOVE_PIECE,
  SELECT_PIECE,
} from "types/actions";
import { ChessGame } from "types/Chess";

const initState: ChessGame = {
  board: [],
  selectedPiece: null,
  isWhiteMove: true,
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
      const [beforeX, beforeY] = action.piece.position;
      const [afterX, afterY] = action.positionAfterMove;
      action.piece.position = action.positionAfterMove;
      action.piece.isFirstMove = false;
      const newBoard = state.board.map((row) => {
        return row.map((field) => {
          field.isAllowed = false;
          return field;
        });
      });
      newBoard[beforeX][beforeY].piece = null;
      newBoard[afterX][afterY].piece = action.piece;
      return {
        ...state,
        board: newBoard,
        selectedPiece: null,
        isWhiteMove: !state.isWhiteMove,
      };
    default:
      return { ...state };
  }
};

export default chessReducer;
