import { ChessActionsTypes, START_GAME } from "types/actions";

export const startGame = (): ChessActionsTypes => ({
  type: START_GAME,
});
