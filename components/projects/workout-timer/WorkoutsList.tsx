import React, { ReactElement } from 'react';
import WorkoutsListItem from './WorkoutsListItem';
import styles from '@styles/WorkoutTimer.module.scss'
import { useSelector } from 'react-redux';
import { AppState } from 'store';

const WorkoutsList = (): ReactElement => {

    const { workouts } = useSelector((state: AppState) => state.workoutTimerReducer)

    const allWorkouts = workouts.map(workout => <WorkoutsListItem {...workout} key={workout._id} />)

    return (
        <div className={styles.workoutsList}>
            <h1 className={styles.workoutListHeader}>Your workouts!</h1>
            {allWorkouts}
        </div>
    );
};

export default WorkoutsList;