import { ChessActionsTypes, MOVE_PIECE } from "types/actions";
import { PieceType } from "types/Chess";

export const movePiece = (
  piece: PieceType,
  positionAfterMove: [number, number]
): ChessActionsTypes => ({
  type: MOVE_PIECE,
  piece,
  positionAfterMove,
});
