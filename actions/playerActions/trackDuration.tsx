import { PlayerActionsTypes, TRACK_DURATION } from "types/actions";

export const trackDuration = (current: number, duration: number): PlayerActionsTypes => ({
    type: TRACK_DURATION,
    selectedSongCurrentTime: current,
    selectedSongDuration: duration
})