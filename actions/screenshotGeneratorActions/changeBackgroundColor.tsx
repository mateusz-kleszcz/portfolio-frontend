import { CHANGE_BACKGROUND_COLOR, ScreenshotGeneratorActionsTypes } from "types/actions";

export const changeBackgroundColor = (backgroundColor: string): ScreenshotGeneratorActionsTypes => ({
    type: CHANGE_BACKGROUND_COLOR,
    backgroundColor
})