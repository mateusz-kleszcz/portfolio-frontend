import { ADD_WORKOUT_FAIL, ADD_WORKOUT_SUCCESS, WorkoutTimerActionsTypes } from "../types/actions"
import { Workout } from "../types/WorkoutTimer"

const initState: Workout = {
    name: '',
    numberOfSets: 3,
    numberOfExercises: 4,
    lengthOfExercise: 30,
    lengthOfRest: 10,
}

const workoutTimerReducer = (state = initState, actions: WorkoutTimerActionsTypes): Workout => {
    switch (actions.type) {
        case ADD_WORKOUT_SUCCESS:
            return {
                ...state,
            }
        case ADD_WORKOUT_FAIL:
            return {
                ...state,
            }
        default:
            return {
                ...state
            }
    }
}

export default workoutTimerReducer