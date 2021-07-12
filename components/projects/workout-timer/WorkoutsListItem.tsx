import React from 'react';
import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/WorkoutTimer.module.scss'
import { useDispatch } from 'react-redux';
import { deleteWorkout } from '@actions/workoutActions/deleteWorkout';

interface WorkoutsListItemProps {
    _id: string,
    name: string,
    numberOfIntervals: number,
    numberOfExercises: number,
}

const playImgSrc = '/play-black.png'
const trashImageSrc = '/trash.png'

const WorkoutsListItem = ({ _id, name, numberOfIntervals, numberOfExercises }: WorkoutsListItemProps): ReactElement => {

    const dispatch = useDispatch()

    const handleDeleteWorkout = () => dispatch(deleteWorkout(_id))

    return (
        <div className={styles.workoutsListItem}>
            <div className={styles.workoutName}>{name}</div>
            <div className={styles.workoutSets}>{numberOfIntervals}</div>
            <div className={styles.workoutExercises}>{numberOfExercises}</div>
            <div className={styles.workoutPlay}>
                <Link href={`/projects/workouttimer/${_id}`} key={_id}>
                    <a>
                        <Image
                            src={playImgSrc}
                            width={25}
                            height={25}
                        />
                    </a>
                </Link>
            </div>
            <div className={styles.workoutDelete} onClick={handleDeleteWorkout}>
                <Image
                    src={trashImageSrc}
                    width={25}
                    height={25}
                />
            </div>
        </div>
    );
};

export default WorkoutsListItem;