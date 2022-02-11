import styles from "@styles/Player.module.scss";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "store";
import { pauseSong } from "@actions/playerActions/pauseSong";
import { playSong } from "@actions/playerActions/playSong";
import { ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRandom, faRedo } from "@fortawesome/free-solid-svg-icons";
import DurationBar from "./DurationBar";
import { toggleShuffle } from "@actions/playerActions/toggleShuffle";
import { toggleRandom } from "@actions/playerActions/toggleRandom";
import { changeSong } from "@actions/playerActions/changeSong";

const previousImageSrc = "/previous.png";
const playImageSrc = "/play.png";
const pauseImageSrc = "/pause.png";
const nextImageSrc = "/next.png";

const ControlsSection = (): ReactElement => {
  const {
    selectedAlbumSongs,
    selectedSongTitle,
    isPlaying,
    isShuffle,
    isRepeat,
  } = useSelector((state: AppState) => state.playerReducer);

  const dispatch = useDispatch();
  // pause or play song
  const handlePlayButtonClick = () => {
    if (isPlaying) dispatch(pauseSong());
    else if (selectedSongTitle !== "") dispatch(playSong(selectedSongTitle));
  };

  const handlePreviousSongClick = () => {
    if (selectedSongTitle !== "") {
      const { length } = selectedAlbumSongs; // number of songs in selected album
      let id: number = parseInt(selectedSongTitle.split(" ")[0]) - 1; // id is first word in every title
      if (!isRepeat) {
        // if repeat is on go to the same song
        if (id == 0) id = length - 1;
        // if its the first song in album go to the last one
        else id--; // if it isnt the first one go to previous
        if (isShuffle) id = Math.floor(Math.random() * length); // if shuffle is on get random one
        dispatch(changeSong(id));
      } else {
        // if repeat is on go to the beginning of the song
        const audio = document.getElementById(
          "audioElement"
        ) as HTMLAudioElement;
        audio.currentTime = 0;
      }
    }
  };

  const handleNextSongClick = () => {
    if (selectedSongTitle !== "") {
      const { length } = selectedAlbumSongs; // number of songs in selected album
      let id: number = parseInt(selectedSongTitle.split(" ")[0]) - 1; // id is first word in every title
      if (!isRepeat) {
        // if repeat is off change song
        if (id == length - 1) id = 0;
        // if its the last song in album go to the first one
        else id++; // if it isnt the last one go to next
        if (isShuffle) id = Math.floor(Math.random() * length); // if shuffle is on get random one
        dispatch(changeSong(id));
      } else {
        // if repeat is on go to the beginning
        const audioElement = document.getElementById(
          "audioElement"
        ) as HTMLAudioElement;
        audioElement.currentTime = 0;
      }
    }
  };

  const handleShuffleClick = () => dispatch(toggleShuffle());
  const handleRandomClick = () => dispatch(toggleRandom());

  return (
    <div className={styles.controlsSection}>
      <div className={styles.controls}>
        <div className={styles.shuffleButton}>
          <FontAwesomeIcon
            icon={faRandom}
            onClick={handleShuffleClick}
            style={{ color: isShuffle ? "#00796B" : "white" }}
          />
        </div>
        <div className={styles.controlButton} onClick={handlePreviousSongClick}>
          <Image src={previousImageSrc} width={32} height={32} />
        </div>
        <div className={styles.controlButton}>
          <Image
            src={isPlaying ? pauseImageSrc : playImageSrc}
            width={40}
            height={40}
            onClick={handlePlayButtonClick}
          />
        </div>
        <div className={styles.controlButton} onClick={handleNextSongClick}>
          <Image src={nextImageSrc} width={32} height={32} />
        </div>
        <div className={styles.repeatButton}>
          <FontAwesomeIcon
            icon={faRedo}
            onClick={handleRandomClick}
            style={{ color: isRepeat ? "#00796B" : "white" }}
          />
        </div>
      </div>
      <DurationBar />
    </div>
  );
};

export default ControlsSection;
