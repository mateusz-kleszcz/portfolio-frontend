import React from 'react';
import { ReactElement } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '@styles/WorkoutTimer.module.scss'

interface WorkoutsListItemProps {
    _id: string,
    name: string,
    numberOfSets: number,
    numberOfExercises: number,
}

const playImgSrc = '/play.png'

const WorkoutsListItem = ({ _id, name, numberOfSets, numberOfExercises }: WorkoutsListItemProps): ReactElement => {
    return (
        <div className={styles.workoutsListItem}>
            <div>{name}</div>
            <div>{numberOfSets}</div>
            <div>{numberOfExercises}</div>
            <div>
                <Link href={`/projects/workouttimer/${_id}`} key={_id}>
                    <Image
                        src={playImgSrc}
                        width={25}
                        height={25}
                    />
                </Link>
            </div>
        </div>
    );
};

export default WorkoutsListItem;