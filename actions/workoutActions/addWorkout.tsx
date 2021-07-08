import { Dispatch } from "hoist-non-react-statics/node_modules/@types/react"
import { Workout, WorkoutWithID } from "types/WorkoutTimer"
import { ADD_WORKOUT_FAIL, ADD_WORKOUT_SUCCESS, AppActions } from "types/actions"
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const addWorkoutSuccess = (workout: WorkoutWithID): AppActions => ({
    type: ADD_WORKOUT_SUCCESS,
    workout
})

const addWorkoutFail = (errorMessage: string): AppActions => ({
    type: ADD_WORKOUT_FAIL,
    errorMessage
})

export const addWorkout = (workout: Workout) => async (dispatch: Dispatch<AppActions>) => {
    try {
        const res = await fetch(`${publicRuntimeConfig.API_ADDRESS}/api/workout`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ workout })
        })
        const json = await res.json()
        dispatch(addWorkoutSuccess(json.workout))
    } catch (err) {
        dispatch(addWorkoutFail(err))
    }
}