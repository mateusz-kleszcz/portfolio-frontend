import React, { ReactElement } from 'react';
import { WorkoutWithID } from '../../../types/WorkoutTimer';
import WorkoutsListItem from './WorkoutsListItem';

interface WorkoutsListProps {
    workouts: WorkoutWithID[]
}

const WorkoutsList = ({ workouts }: WorkoutsListProps): ReactElement => {

    const allWorkouts = workouts.map(workout => <WorkoutsListItem {...workout} key={workout._id} />)

    return (
        <div>
            {allWorkouts}
        </div>
    );
};

export default WorkoutsList;