import { ReactElement, useEffect, useState } from 'react';
import styles from '../../../styles/Player.module.scss';
import { useSelector } from 'react-redux';
import { AppState } from '../../../store';

const InfoSection = (): ReactElement => {

    const { selectedAlbumName, selectedSongTitle } = useSelector((state: AppState) => state.playerReducer)

    const [albumName, setAlbumName] = useState('')
    const [title, setTitle] = useState('')

    useEffect(() => {
        setAlbumName(selectedAlbumName)
        const newName = selectedSongTitle.split('.').slice(0, -1).join().split(' ').slice(1).join(' ')
        setTitle(newName)
    }, [selectedSongTitle])

    return (
        <div className={styles.infoSection}>
            <div className={styles.albumCover}>
                {
                    albumName !== '' ? (
                        <img
                            className={styles.coverImage}
                            src={`https://portfolio-kleszcz.herokuapp.com/api/player/cover/${albumName}.jpg`}
                            alt={selectedAlbumName}
                        />
                    ) : null
                }
            </div>
            <div className={styles.albumDetails}>
                <div>{albumName}</div>
                <div>{title}</div>
            </div>
        </div>
    );
};

export default InfoSection;