import { CHANGE_TEXT, ScreenshotGeneratorActionsTypes } from "types/actions";

export const changeText = (text: string): ScreenshotGeneratorActionsTypes => ({
    type: CHANGE_TEXT,
    text,
})