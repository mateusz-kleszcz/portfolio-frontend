import { ChessActionsTypes, SELECT_PIECE } from "types/actions";
import { PieceType } from "types/Chess";

export const selectPiece = (selectedPiece: PieceType): ChessActionsTypes => ({
  type: SELECT_PIECE,
  selectedPiece,
});
