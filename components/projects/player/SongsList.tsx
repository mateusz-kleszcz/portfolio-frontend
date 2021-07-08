import { useSelector } from 'react-redux';
import { AppState } from 'store';
import styles from '@styles/Player.module.scss'
import SongLabel from './SongLabel';


const SongsList = () => {

    const { selectedAlbumSongs } = useSelector((state: AppState) => state.playerReducer)

    const songList = selectedAlbumSongs.map((song, index) => <SongLabel songId={index} name={song.name} album={song.album} duration={song.duration} key={song._id} />)

    return (
        <div id={styles.songsList}>
            <div className={styles.songLabel}>
                <div className={styles.songId}>#</div>
                <div className={styles.songName}>Title</div>
                <div className={styles.songAlbum}>Album</div>
                <div className={styles.songDuration}>Duration</div>
                <div className={styles.playSong}>Play/Pause</div>
                <div className={styles.addToPlaylist}>Playlist</div>
            </div>
            {songList}
        </div>
    );
};

export default SongsList;