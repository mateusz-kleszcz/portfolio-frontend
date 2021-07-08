import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '../../../styles/WorkoutTimer.module.scss'
import { Workout } from '../../../types/WorkoutTimer';
import { addWorkout } from '../../../actions/workoutActions/addWorkout';

const CreateTimer = () => {

    const [name, setName] = useState<string>('')
    const [numberOfSets, setNumberOfSets] = useState<number>(3)
    const [numberOfExercises, setNumberOfExercises] = useState<number>(3)
    const [lengthOfExercise, setLengthOfExercise] = useState<number>(30)
    const [lengthOfRest, setLengthOfRest] = useState<number>(10)

    const dispatch = useDispatch()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }

    const handleNumberOfSetsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const number: number = parseInt(e.target.value)
        setNumberOfSets(number)
    }

    const handleNumberOfExercisesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const number: number = parseInt(e.target.value)
        setNumberOfExercises(number)
    }

    const handleLenghtOfExerciseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const length = parseInt(e.target.value)
        setLengthOfExercise(length)
    }

    const handleLengthOfRestChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const length = parseInt(e.target.value)
        setLengthOfRest(length)
    }

    const handleAddTraining = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const workout: Workout = {
            name,
            numberOfSets,
            numberOfExercises,
            lengthOfExercise,
            lengthOfRest
        }
        dispatch(addWorkout(workout))
    }

    return (
        <div className={styles.timerCreator}>
            <h1>Create your own workout!</h1>
            <label htmlFor="name">Name of training</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={handleNameChange}
            />
            <br />
            <label htmlFor="numberOfSets">Number of sets</label>
            <input
                type="range"
                name="numberOfSets"
                min={1}
                id="numberOfSets"
                value={numberOfSets}
                onChange={handleNumberOfSetsChange}
            />
            {numberOfSets}
            <br />
            <label htmlFor="numberOfExercises">Number of exercises in sets</label>
            <input
                type="range"
                name="numberOfExercises"
                min={1}
                max={10}
                id="numberOfExercises"
                value={numberOfExercises}
                onChange={handleNumberOfExercisesChange}
            />
            {numberOfExercises}
            <br />
            <label htmlFor="lengthOfExercise">Length of each exercise</label>
            <input
                type="number"
                name="lengthOfExercise"
                id="lengthOfExercise"
                min={5}
                max={120}
                value={lengthOfExercise}
                onChange={handleLenghtOfExerciseChange}
            />
            {`${lengthOfExercise}s`}
            <br />
            <label htmlFor="lengthOfRest">Length of rest after exercise</label>
            <input
                type="number"
                name="lengthOfRest"
                min={0}
                max={30}
                id="lengthOfRest"
                value={lengthOfRest}
                onChange={handleLengthOfRestChange}
            />
            {`${lengthOfRest}s`}
            <br />
            <button onClick={handleAddTraining}>Add training</button>
            <br />
        </div>
    );
};

export default CreateTimer;