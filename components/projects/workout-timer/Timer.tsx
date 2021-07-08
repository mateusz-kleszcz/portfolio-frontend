import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Workout } from '../../../types/WorkoutTimer';

const playImgSrc = '/play.png'
const pauseImgSrc = '/pause.png'

const Timer = ({ name, numberOfSets, numberOfExercises, lengthOfExercise, lengthOfRest }: Workout) => {

    const [isPaused, setIsPaused] = useState(true)
    const [isExercise, setIsExercise] = useState(true)
    const [setsLeft, setSetsLeft] = useState(numberOfSets)
    const [exercisesLeft, setExercisesLeft] = useState(numberOfExercises)
    const [timeLeft, setTimeLeft] = useState(lengthOfExercise)

    useEffect(() => {
        if (!isPaused) {
            const countDown = setInterval(() => {
                if (timeLeft > 0) {
                    setTimeLeft(timeLeft - 1)
                } else {
                    if (isExercise) {
                        if (exercisesLeft > 0) {
                            setExercisesLeft(exercisesLeft - 1)
                            setTimeLeft(lengthOfRest)
                        } else {
                            if (setsLeft > 0) {
                                setSetsLeft(setsLeft - 1)
                                setExercisesLeft(numberOfExercises)
                                setTimeLeft(10)
                            } else {
                                clearInterval(countDown)
                            }
                        }
                    } else {
                        setTimeLeft(lengthOfExercise)
                    }
                    setIsExercise(!isExercise)
                }
            }, 1000)
            return () => clearInterval(countDown)
        }
    }, [timeLeft, isPaused])

    const handleToggleTimer = () => setIsPaused(!isPaused)

    return (
        <div>
            <h1>{name}</h1>
            <div>sets left: {setsLeft}</div>
            <div>number of exercise: {exercisesLeft}</div>
            <div>time to end of exercise: {timeLeft}</div>
            <div>{isExercise ? 'EXERCISE' : 'REST'}</div>
            <div onClick={handleToggleTimer}>
                <Image
                    src={isPaused ? playImgSrc : pauseImgSrc}
                    width={25}
                    height={25}
                />
            </div>
        </div>
    );
};

export default Timer;