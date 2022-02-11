import { ReactElement, useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { AppState } from "store";
import styles from "@styles/Player.module.scss";

const DurationBar = (): ReactElement => {
  const { selectedSongCurrentTime, selectedSongDuration } = useSelector(
    (state: AppState) => state.playerReducer
  );
  const durationBarElement = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);

  // convert duration to mm:ss format
  const getTime = (duration: number) => {
    const minutes: number = Math.floor(duration / 60);
    const minutesString: string =
      minutes < 10 ? `0${minutes}` : String(minutes);
    const seconds: number = Math.floor(duration % 60);
    const secondsstring: string =
      seconds < 10 ? `0${seconds}` : String(seconds);
    const fullData = `${minutesString}:${secondsstring}`;
    return fullData;
  };

  // fill duration bar on song progres
  useEffect(() => {
    const durationWidth =
      (selectedSongCurrentTime / selectedSongDuration) * 100;
    if (!isNaN(durationWidth)) {
      setProgress(durationWidth);
    }
  }, [selectedSongCurrentTime]);

  const handleDurationBarClick = (e: React.MouseEvent) => {
    if (durationBarElement.current !== null) {
      // get new time depend on clicked position
      const { offsetWidth } = durationBarElement.current;
      const { offsetX } = e.nativeEvent;
      const newTime = (offsetX / offsetWidth) * selectedSongDuration;
      // change time of played song
      const audioElement = document.getElementById(
        "audioElement"
      ) as HTMLAudioElement;
      audioElement.currentTime = newTime;
    }
  };

  return (
    <div className={styles.duration}>
      <div className={styles.currentTime}>
        {getTime(selectedSongCurrentTime)}
      </div>
      <div
        ref={durationBarElement}
        className={styles.durationBar}
        onClick={handleDurationBarClick}
      >
        <div
          className={styles.progress}
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <div className={styles.songDuration}>{getTime(selectedSongDuration)}</div>
    </div>
  );
};

export default DurationBar;
