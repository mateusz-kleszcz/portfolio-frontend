import { Album } from 'types/Player';
import styles from '@styles/Player.module.scss'
import { useDispatch } from 'react-redux';
import { changeAlbum } from '@actions/playerActions/changeAlbum';
import { ReactElement } from 'react';

const AlbumLabel = ({ _id, artist, albumName, year, duration }: Album): ReactElement => {

    const dispatch = useDispatch()

    const handleAlbumClick = () => {
        dispatch(changeAlbum(_id, albumName))
    }

    return (
        <div className={styles.albumLabel} onClick={handleAlbumClick}>
            <div className={styles.albumCover}>
                <img
                    src={`https://portfolio-kleszcz.herokuapp.com/api/player/cover/${albumName}.jpg`}
                    className={styles.coverImage}
                />
            </div>
            <div className={styles.songDetails}>
                <div className={styles.songDetailsLeft}>
                    <div>
                        {artist}
                    </div>
                    <div>
                        {albumName}
                    </div>
                </div>
                <div className={styles.songDetailsRight}>
                    <div>
                        {duration}
                    </div>
                    <div>
                        {year}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AlbumLabel;