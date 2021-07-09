import { LOAD_INITIAL_WORKOUTS } from "types/actions";
import { Workout } from "types/WorkoutTimer";

export const loadInitialWorkouts = (workouts: Workout[]) => ({
    type: LOAD_INITIAL_WORKOUTS,
    workouts
})