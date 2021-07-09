import React from 'react';
import Image from 'next/image'
import { useState, useEffect } from 'react';
import { Workout } from 'types/WorkoutTimer';
import { useRef } from 'react';

const playImgSrc = '/play.png'
const pauseImgSrc = '/pause.png'
const shortBeepAudioSrc = '/beep-short.mp3'
const longBeepAudioSrc = '/beep-long.mp3'

const Timer = ({ name, numberOfIntervals, numberOfExercises, lengthOfExercise, lengthOfRestExercise, lengthOfRestInterval }: Workout) => {

    const shortBeepRef = useRef<HTMLAudioElement>(null)
    const longBeepRef = useRef<HTMLAudioElement>(null)

    const [isPaused, setIsPaused] = useState(true)
    const [isExercise, setIsExercise] = useState(true)
    const [intervalsLeft, setIntervalsLeft] = useState(numberOfIntervals)
    const [exercisesLeft, setExercisesLeft] = useState(numberOfExercises)
    const [timeLeft, setTimeLeft] = useState(lengthOfExercise)

    useEffect(() => {
        if (!isPaused) {
            const countDown = setInterval(() => {
                if (timeLeft > 0) {
                    if (timeLeft < 4) {
                        if (shortBeepRef.current !== null)
                            shortBeepRef.current.play()
                    }
                    setTimeLeft(timeLeft - 1)
                } else {
                    if (longBeepRef.current !== null)
                        longBeepRef.current.play()
                    if (isExercise) {
                        if (exercisesLeft > 0) {
                            setExercisesLeft(exercisesLeft - 1)
                            setTimeLeft(lengthOfRestExercise)
                        } else {
                            if (intervalsLeft > 0) {
                                setIntervalsLeft(intervalsLeft - 1)
                                setExercisesLeft(numberOfExercises)
                                setTimeLeft(lengthOfRestInterval)
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
            <div>sets left: {intervalsLeft}</div>
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
            <audio src={shortBeepAudioSrc} ref={shortBeepRef}></audio>
            <audio src={longBeepAudioSrc} ref={longBeepRef}></audio>
        </div>
    );
};

export default Timer;