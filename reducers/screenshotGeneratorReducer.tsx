import { CHANGE_BACKGROUND_COLOR, CHANGE_PHONE, CHANGE_SIZE, CHANGE_TEXT, ScreenshotGeneratorActionsTypes } from "../types/actions"
import { Screenshot } from "../types/ScreenshotGenerator"

const initState: Screenshot = {
    backgroundColor: '#008080',
    text: '',
    phone: 'Iphone 11',
    size: 240,
}

const screenshotGeneratorReducer = (state = initState, actions: ScreenshotGeneratorActionsTypes): Screenshot => {
    switch (actions.type) {
        case CHANGE_BACKGROUND_COLOR:
            return {
                ...state,
                backgroundColor: actions.backgroundColor,
            }
        case CHANGE_TEXT:
            return {
                ...state,
                text: actions.text,
            }
        case CHANGE_PHONE:
            return {
                ...state,
                phone: actions.phone,
            }
        case CHANGE_SIZE:
            return {
                ...state,
                size: actions.size,
            }
        default:
            return { ...state }
    }
}

export default screenshotGeneratorReducer