import { ReactElement, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeSong } from "@actions/playerActions/changeSong";
import { trackDuration } from "@actions/playerActions/trackDuration";
import { AppState } from "store";

const AudioElement = (): ReactElement => {
  const audioElement = useRef<HTMLAudioElement>(null);
  const dispatch = useDispatch();

  const {
    selectedAlbumName,
    selectedSongTitle,
    selectedAlbumSongs,
    selectedSongDuration,
    isPlaying,
    volume,
  } = useSelector((state: AppState) => state.playerReducer);

  // load and play selected song
  useEffect(() => {
    if (audioElement.current !== null) {
      if (selectedAlbumName !== "" && selectedSongTitle !== "") {
        const src = `https://portfolio-kleszcz.herokuapp.com/api/player/albums/${selectedAlbumName}/${selectedSongTitle}`;
        audioElement.current.src = src;
        audioElement.current.load();
        audioElement.current.play();
      }
    }
  }, [selectedSongTitle]);

  // play/pause song
  useEffect(() => {
    if (audioElement.current !== null) {
      isPlaying ? audioElement.current.play() : audioElement.current.pause();
    }
  }, [isPlaying]);

  // change volume on redux state change
  useEffect(() => {
    if (audioElement.current !== null) {
      const value = volume / 100;
      audioElement.current.volume = value;
    }
  }, [volume]);

  //track duration and progress of the song
  const handleTimeUpdate = () => {
    if (audioElement.current !== null) {
      const { currentTime } = audioElement.current;
      dispatch(trackDuration(currentTime, selectedSongDuration));
    }
  };

  // when song ends go to the next one
  const handleSongEnd = () => {
    let id: number = parseInt(selectedSongTitle.split(" ")[0]); // id of the next song
    const { length } = selectedAlbumSongs; // length of the album
    if (id === length) id = 0;
    dispatch(changeSong(id));
  };

  return (
    <audio
      ref={audioElement}
      onTimeUpdate={handleTimeUpdate}
      onEnded={handleSongEnd}
      id="audioElement"
    ></audio>
  );
};

export default AudioElement;
