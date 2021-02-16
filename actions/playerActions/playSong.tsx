import { PlayerActionsTypes, PLAY_SONG } from "../../types/actions"

export const playSong = (title: string): PlayerActionsTypes => ({
    type: PLAY_SONG,
    selectedSongTitle: title,
})