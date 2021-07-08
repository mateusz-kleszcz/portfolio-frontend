import { PAUSE_SONG, PlayerActionsTypes } from "types/actions";

export const pauseSong = (): PlayerActionsTypes => ({
    type: PAUSE_SONG,
})