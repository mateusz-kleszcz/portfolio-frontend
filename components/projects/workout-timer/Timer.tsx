import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Workout } from "types/WorkoutTimer";
import { useRef } from "react";
import styles from "@styles/WorkoutTimer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPauseCircle,
  faPlayCircle,
  faRedo,
} from "@fortawesome/free-solid-svg-icons";

const playImgSrc = "/play-black.png";
const pauseImgSrc = "/pause-black.png";
const redoImgSrc = "/redo.png";
const shortBeepAudioSrc = "/beep-short.mp3";
const longBeepAudioSrc = "/beep-long.mp3";

const Timer = ({
  name,
  numberOfIntervals,
  numberOfExercises,
  lengthOfExercise,
  lengthOfRestExercise,
  lengthOfRestInterval,
}: Workout) => {
  const shortBeepRef = useRef<HTMLAudioElement>(null);
  const longBeepRef = useRef<HTMLAudioElement>(null);

  const workoutTime =
    numberOfExercises *
      numberOfIntervals *
      (lengthOfExercise + lengthOfRestExercise) +
    (numberOfIntervals - 1) * lengthOfRestInterval;

  const [isPaused, setIsPaused] = useState(true);
  const [isExercise, setIsExercise] = useState(true);
  const [isEndOfInterval, setIsEndOfInterval] = useState(false);
  const [intervalsLeft, setIntervalsLeft] = useState(numberOfIntervals);
  const [exercisesLeft, setExercisesLeft] = useState(numberOfExercises);
  const [timeLeft, setTimeLeft] = useState(lengthOfExercise);
  const [workoutTimeLeft, setWorkoutTimeLeft] = useState(workoutTime);

  const convertTime = (time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const minutesString: string =
      minutes < 10 ? `0${minutes}` : minutes.toString();
    const seconsString: string =
      seconds < 10 ? `0${seconds}` : seconds.toString();
    return `${minutesString}:${seconsString}`;
  };

  useEffect(() => {
    if (!isPaused) {
      const countDown = setInterval(() => {
        if (workoutTimeLeft !== 0) setWorkoutTimeLeft(workoutTimeLeft - 1);
        if (timeLeft > 1) {
          if (timeLeft < 5) {
            if (shortBeepRef.current !== null) shortBeepRef.current.play();
          }
          setTimeLeft(timeLeft - 1);
        } else {
          if (longBeepRef.current !== null) longBeepRef.current.play();
          if (isExercise) {
            setTimeLeft(lengthOfRestExercise);
            setIsExercise(false);
          } else if (isEndOfInterval) {
            setIsEndOfInterval(false);
            setIsExercise(true);
            setTimeLeft(lengthOfExercise);
          } else {
            if (exercisesLeft > 1) {
              setExercisesLeft(exercisesLeft - 1);
              setTimeLeft(lengthOfExercise);
              setIsExercise(true);
            } else {
              if (intervalsLeft > 1) {
                setIntervalsLeft(intervalsLeft - 1);
                setExercisesLeft(numberOfExercises);
                setTimeLeft(lengthOfRestInterval);
              } else {
                setTimeLeft(0);
                clearInterval(countDown);
              }
              setIsEndOfInterval(true);
            }
          }
        }
      }, 1000);
      return () => clearInterval(countDown);
    }
  }, [timeLeft, isPaused]);

  const handleToggleTimer = () => setIsPaused(!isPaused);

  const handleRestartTimer = () => {
    setIsPaused(true);
    setIsExercise(true);
    setIsEndOfInterval(false);
    setIntervalsLeft(numberOfIntervals);
    setExercisesLeft(numberOfExercises);
    setTimeLeft(lengthOfExercise);
    setWorkoutTimeLeft(workoutTime);
  };

  return (
    <div className={styles.timer}>
      <h1 className={styles.timerHeader}>{name}</h1>
      <div className={styles.timeLeft}>{convertTime(timeLeft)}</div>
      <div className={styles.howManyLeft}>
        <div className={styles.timePassed}>
          <p>TIME PASSED</p>
          <p>{convertTime(workoutTime - workoutTimeLeft)}</p>
        </div>
        <div className={styles.intervalsLeft}>
          <p>INTERVAL</p>
          <p>
            {numberOfIntervals - intervalsLeft + 1} / {numberOfIntervals}
          </p>
        </div>
        <div className={styles.exercisesLeft}>
          <p>EXERCISE</p>
          <p>
            {numberOfExercises - exercisesLeft + 1} / {numberOfExercises}
          </p>
        </div>
        <div className={styles.workoutTimeLeft}>
          <p>TIME TO END</p>
          <p>{convertTime(workoutTimeLeft)}</p>
        </div>
      </div>
      <div className={styles.info}>
        {isPaused
          ? "PAUSE"
          : isEndOfInterval
          ? "END OF INTERVAL"
          : isExercise
          ? "EXERCISE"
          : "REST"}
      </div>
      <div className={styles.controls}>
        <div onClick={handleToggleTimer}>
          <FontAwesomeIcon
            icon={isPaused ? faPlayCircle : faPauseCircle}
            width={50}
            height={50}
          />
        </div>
        <div onClick={handleRestartTimer}>
          <FontAwesomeIcon icon={faRedo} width={50} height={50} />
        </div>
      </div>

      <audio src={shortBeepAudioSrc} ref={shortBeepRef}></audio>
      <audio src={longBeepAudioSrc} ref={longBeepRef}></audio>
    </div>
  );
};

export default Timer;
