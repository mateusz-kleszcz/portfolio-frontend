import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { changeAlbum } from '@actions/playerActions/changeAlbum';
import AlbumsList from '@components/projects/player/AlbumsList';
import AudioElement from '@components/projects/player/AudioElement';
import SongInfo from '@components/projects/player/SongInfo';
import SongsList from '@components/projects/player/SongsList';
import styles from '@styles/Player.module.scss'
import { Album } from 'types/Player';

interface AudioPlayerProps {
    albums: Album[],
}

export const getStaticProps = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ADDRESS}/api/player/albums`)
    const json = await res.json()

    return {
        props: {
            albums: json.albums
        }
    }
}

const audioplayer = ({ albums }: AudioPlayerProps) => {

    const dispatch = useDispatch()

    useEffect(() => {
        const { _id, albumName } = albums[0] // load songs from first album in list
        dispatch(changeAlbum(_id, albumName))
    }, [])

    return (
        <div className={styles.audioPlayer}>
            <AlbumsList albums={albums} />
            <SongsList />
            <SongInfo />
            <AudioElement />
        </div>
    );
};

export default audioplayer;