import { CHANGE_PHONE, ScreenshotGeneratorActionsTypes } from "types/actions";

export const changePhone = (phone: string): ScreenshotGeneratorActionsTypes => ({
    type: CHANGE_PHONE,
    phone,
})