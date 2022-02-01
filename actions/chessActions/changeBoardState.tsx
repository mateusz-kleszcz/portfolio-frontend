import { ChessActionsTypes, CHANGE_BOARD_STATE } from "types/actions";
import { FieldType } from "types/Chess";

export const changeBoardState = (board: FieldType[][]): ChessActionsTypes => ({
  type: CHANGE_BOARD_STATE,
  board,
});
