export interface Workout {
    name: string,
    numberOfIntervals: number,
    numberOfExercises: number,
    lengthOfExercise: number,
    lengthOfRestExercise: number,
    lengthOfRestInterval: number,
}

export interface WorkoutWithID {
    _id: string,
    name: string,
    numberOfIntervals: number,
    numberOfExercises: number,
    lengthOfExercise: number,
    lengthOfRestExercise: number,
    lengthOfRestInterval: number,
}

export interface WorkoutTimer {
    workouts: WorkoutWithID[],
    errorMessage: string,
}