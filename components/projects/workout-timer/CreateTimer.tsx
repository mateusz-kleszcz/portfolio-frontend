import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styles from '@styles/WorkoutTimer.module.scss'
import { Workout } from 'types/WorkoutTimer';
import { addWorkout } from '@actions/workoutActions/addWorkout';

const CreateTimer = () => {

    const [name, setName] = useState<string>('')
    const [numberOfIntervals, setNumberOfIntervals] = useState<number>(3)
    const [numberOfExercises, setNumberOfExercises] = useState<number>(3)
    const [lengthOfExercise, setLengthOfExercise] = useState<number>(30)
    const [lengthOfRestExercise, setLengthOfRestExercise] = useState<number>(10)
    const [lengthOfRestInterval, setLengthOfRestInterval] = useState<number>(60)

    const dispatch = useDispatch()

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }

    const handleNumberOfIntervalsChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const number: number = parseInt(e.target.value)
        setNumberOfIntervals(number)
    }

    const handleNumberOfExercisesChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const number: number = parseInt(e.target.value)
        setNumberOfExercises(number)
    }

    const handleLenghtOfExerciseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const length = parseInt(e.target.value)
        setLengthOfExercise(length)
    }

    const handleLengthOfRestExerciseChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const length = parseInt(e.target.value)
        setLengthOfRestExercise(length)
    }

    const handleLengthOfRestIntervalChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const length = parseInt(e.target.value)
        setLengthOfRestInterval(length)
    }

    const handleAddTraining = (e: React.MouseEvent<HTMLButtonElement>): void => {
        const workout: Workout = {
            name,
            numberOfIntervals,
            numberOfExercises,
            lengthOfExercise,
            lengthOfRestExercise,
            lengthOfRestInterval,
        }
        dispatch(addWorkout(workout))
    }

    return (
        <div className={styles.timerCreator}>
            <h1>Create your own workout</h1>
            <label htmlFor="name">Name of training</label>
            <input
                type="text"
                name="name"
                id="name"
                value={name}
                placeholder='Your name...'
                onChange={handleNameChange}
            />
            <br />
            <label htmlFor="numberOfIntervals">Number of interval</label>
            <div>
                <input
                    type="range"
                    name="numberOfIntervals"
                    min={1}
                    max={10}
                    id="numberOfIntervals"
                    value={numberOfIntervals}
                    onChange={handleNumberOfIntervalsChange}
                />
                {numberOfIntervals}
            </div>
            <br />
            <label htmlFor="numberOfExercises">Number of exercises in interval</label>
            <div>
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
            </div>
            <br />
            <label htmlFor="lengthOfExercise">Length of each exercise</label>
            <div>
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
            </div>
            <br />
            <label htmlFor="lengthOfRestExercise">Length of rest after exercise</label>
            <div>
                <input
                    type="number"
                    name="lengthOfRestExercise"
                    min={5}
                    max={30}
                    id="lengthOfRestExercise"
                    value={lengthOfRestExercise}
                    onChange={handleLengthOfRestExerciseChange}
                />
                {`${lengthOfRestExercise}s`}
            </div>
            <br />
            <label htmlFor="lengthOfRestInterval">Length of rest after interval</label>
            <div>
                <input
                    type="number"
                    name="lengthOfRestInterval"
                    min={10}
                    max={90}
                    id="lengthOfRestInterval"
                    value={lengthOfRestInterval}
                    onChange={handleLengthOfRestIntervalChange}
                />
                {`${lengthOfRestInterval}s`}
            </div>
            <br />
            <button onClick={handleAddTraining}>Add training</button>
            <br />
        </div>
    );
};

export default CreateTimer;