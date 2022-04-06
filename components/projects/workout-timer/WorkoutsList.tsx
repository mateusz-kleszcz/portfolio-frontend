import React, { ReactElement } from "react";
import WorkoutsListItem from "./WorkoutsListItem";
import styles from "@styles/WorkoutTimer.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "store";

const WorkoutsList = (): ReactElement => {
  const { workouts } = useSelector(
    (state: AppState) => state.workoutTimerReducer
  );

  const allWorkouts = workouts.map((workout) => (
    <WorkoutsListItem {...workout} key={workout._id} />
  ));

  return (
    <div className={styles.workoutsList}>
      <h1 className={styles.workoutListHeader}>Your workouts</h1>
      <div className={styles.workoutsListItem}>
        <div className={styles.workoutName}>Name</div>
        <div className={styles.workoutIntervals}>Intervals</div>
        <div className={styles.workoutExercises}>Exercises</div>
        <div className={styles.workoutPlay}>Play</div>
        <div className={styles.workoutDelete}>Delete</div>
      </div>
      {allWorkouts}
    </div>
  );
};

export default WorkoutsList;
