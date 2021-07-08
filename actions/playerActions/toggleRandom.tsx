import { PlayerActionsTypes, TOGGLE_RANDOM } from "types/actions";

export const toggleRandom = (): PlayerActionsTypes => ({
    type: TOGGLE_RANDOM,
})