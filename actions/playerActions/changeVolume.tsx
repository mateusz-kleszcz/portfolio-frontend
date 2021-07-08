import { CHANGE_VOLUME, PlayerActionsTypes } from "types/actions"

export const changeVolume = (volume: number): PlayerActionsTypes => ({
    type: CHANGE_VOLUME,
    volume
})