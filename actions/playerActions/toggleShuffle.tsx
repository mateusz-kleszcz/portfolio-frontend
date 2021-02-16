import { PlayerActionsTypes, TOGGLE_SHUFFLE } from "../../types/actions";

export const toggleShuffle = (): PlayerActionsTypes => ({
    type: TOGGLE_SHUFFLE,
})