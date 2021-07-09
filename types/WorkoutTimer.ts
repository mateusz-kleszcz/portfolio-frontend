export interface Workout {
    name: string,
    numberOfSets: number,
    numberOfExercises: number,
    lengthOfExercise: number,
    lengthOfRest: number,
}

export interface WorkoutWithID {
    _id: string,
    name: string,
    numberOfSets: number,
    numberOfExercises: number,
    lengthOfExercise: number,
    lengthOfRest: number,
}

export interface WorkoutTimer {
    workouts: WorkoutWithID[],
    errorMessage: string,
}