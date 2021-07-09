import { Dispatch } from "react";
import { AppActions, DELETE_WORKOUT_FAIL, DELETE_WORKOUT_SUCCESS } from "types/actions";
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const deleteWorkoutSuccess = (id: string): AppActions => ({
    type: DELETE_WORKOUT_SUCCESS,
    id
})

const deleteWorkoutFail = (errorMessage: string): AppActions => ({
    type: DELETE_WORKOUT_FAIL,
    errorMessage
})

export const deleteWorkout = (id: string) => async (dispatch: Dispatch<AppActions>) => {
    try {
        const res = await fetch(`${publicRuntimeConfig.API_ADDRESS}/api/workout/${id}`, {
            method: 'DELETE',
        })
        const json = await res.json()
        const { _id } = json
        dispatch(deleteWorkoutSuccess(_id))
    } catch (err) {
        dispatch(deleteWorkoutFail(err))
    }
}