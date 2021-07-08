import { CHANGE_SIZE } from "../../types/actions";

export const changeSize = (size: number) => ({
    type: CHANGE_SIZE,
    size
})