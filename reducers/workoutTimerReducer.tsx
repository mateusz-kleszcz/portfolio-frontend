import { ADD_WORKOUT_FAIL, ADD_WORKOUT_SUCCESS, DELETE_WORKOUT_FAIL, DELETE_WORKOUT_SUCCESS, LOAD_INITIAL_WORKOUTS, WorkoutTimerActionsTypes } from "types/actions"
import { WorkoutTimer } from "types/WorkoutTimer"

const initState: WorkoutTimer = {
    workouts: [],
    errorMessage: ''
}

const workoutTimerReducer = (state = initState, actions: WorkoutTimerActionsTypes): WorkoutTimer => {
    switch (actions.type) {
        case LOAD_INITIAL_WORKOUTS:
            return {
                ...state,
                workouts: actions.workouts,
            }
        case ADD_WORKOUT_SUCCESS:
            return {
                ...state,
                workouts: [...state.workouts, actions.workout]
            }
        case ADD_WORKOUT_FAIL:
            return {
                ...state,
            }
        case DELETE_WORKOUT_SUCCESS:
            return {
                ...state,
                workouts: state.workouts.filter(item => item._id != actions.id),
            }
        case DELETE_WORKOUT_FAIL:
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