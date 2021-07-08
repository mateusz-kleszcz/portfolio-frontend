import React, { ReactElement } from 'react';
import { WorkoutWithID } from 'types/WorkoutTimer';
import WorkoutsListItem from './WorkoutsListItem';
import styles from '@styles/WorkoutTimer.module.scss'

interface WorkoutsListProps {
    workouts: WorkoutWithID[]
}

const WorkoutsList = ({ workouts }: WorkoutsListProps): ReactElement => {

    const allWorkouts = workouts.map(workout => <WorkoutsListItem {...workout} key={workout._id} />)

    return (
        <div className={styles.workoutsList}>
            <h1 className={styles.workoutListHeader}>Your workouts!</h1>
            {allWorkouts}
        </div>
    );
};

export default WorkoutsList;