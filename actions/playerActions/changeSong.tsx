import { CHANGE_SONG, PlayerActionsTypes } from "../../types/actions";

export const changeSong = (id: number): PlayerActionsTypes => ({
    type: CHANGE_SONG,
    id
})