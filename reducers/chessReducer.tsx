import { ChessActionsTypes, SELECT_PIECE } from "types/actions";
import { ChessGame } from "types/Chess";

const initState: ChessGame = {
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
    case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.selectedPiece,
      };
    default:
      return { ...state };
  }
};

export default chessReducer;
