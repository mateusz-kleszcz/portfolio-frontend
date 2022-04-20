import { ChessActionsTypes, END_GAME } from "types/actions";

export const startGame = (): ChessActionsTypes => ({
  type: END_GAME,
});
