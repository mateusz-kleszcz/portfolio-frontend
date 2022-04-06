import Image from "next/image";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { pauseSong } from "@actions/playerActions/pauseSong";
import { playSong } from "@actions/playerActions/playSong";
import { trackDuration } from "@actions/playerActions/trackDuration";
import { AppState } from "store";
import styles from "@styles/Player.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList,
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";

interface SongLabelProps {
  songId: number;
  name: string;
  album: string;
  duration: number;
}

const playSongImageSrc = "/play.png";
const pauseSongImageSrc = "/pause.png";
const addToPlaylistImageSrc = "/addToPlaylist.png";

const SongLabel = ({ songId, name, album, duration }: SongLabelProps) => {
  const dispatch = useDispatch();

  const { selectedSongTitle, isPlaying } = useSelector(
    (state: AppState) => state.playerReducer
  );
  const [isThisSongPlaying, setIsThisSongPlaying] = useState(false); //tracking that this song is currently playing (isPlaying tracking any song is playing)

  const [nameWithoutExtension, setNameWithoutExtension] = useState("");
  const [durationString, setDurationString] = useState("00:00");

  //slice the extenstion and id of file from song name
  useEffect(() => {
    const newName = name
      .split(".")
      .slice(0, -1)
      .join()
      .split(" ")
      .slice(1)
      .join(" ");
    setNameWithoutExtension(newName);
  }, [name]);

  //convert numeric time to mm:ss format
  useEffect(() => {
    const minutes: number = Math.floor(duration / 60);
    const minutesString: string =
      minutes < 10 ? `0${minutes}` : String(minutes);
    const seconds: number = Math.floor(duration % 60);
    const secondsstring: string =
      seconds < 10 ? `0${seconds}` : String(seconds);
    const fullData = `${minutesString}:${secondsstring}`;
    setDurationString(fullData);
  }, [duration]);

  //change pause/play icon on redux state changes
  useEffect(() => {
    if (!isPlaying) setIsThisSongPlaying(false);
    else if (selectedSongTitle === name) setIsThisSongPlaying(true);
    else setIsThisSongPlaying(false);
  }, [selectedSongTitle, isPlaying]);

  //handle play/pause song
  const handlePlayClick = () => {
    if (isThisSongPlaying) {
      dispatch(pauseSong());
    } else {
      dispatch(playSong(name));
      dispatch(trackDuration(0, duration));
    }
  };

  return (
    <div className={styles.songLabel}>
      <div className={styles.songId}>{songId + 1}</div>
      <div className={styles.songName}>{nameWithoutExtension}</div>
      <div className={styles.songAlbum}>{album}</div>
      <div className={styles.songDuration}>{durationString}</div>
      <div className={styles.playSong}>
        <FontAwesomeIcon
          icon={isThisSongPlaying ? faPauseCircle : faPlayCircle}
          onClick={handlePlayClick}
        />
      </div>
      <div className={styles.addToPlaylist}>
        <FontAwesomeIcon icon={faList} />
      </div>
    </div>
  );
};

export default SongLabel;
