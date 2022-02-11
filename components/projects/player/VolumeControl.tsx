import {
  faVolumeDown,
  faVolumeOff,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactElement, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeVolume } from "@actions/playerActions/changeVolume";
import { AppState } from "store";
import styles from "@styles/Player.module.scss";

const VolumeControl = (): ReactElement => {
  const dispatch = useDispatch();

  const { volume } = useSelector((state: AppState) => state.playerReducer);

  const [volumeIcon, setVolumeIcon] = useState(faVolumeDown);
  const [previousVolume, setPreviousVolume] = useState(volume); // helper to remember previous value of volume in case of muting by clicking icon
  // when volume changes, set proper icon
  useEffect(() => {
    if (volume === 0) setVolumeIcon(faVolumeOff);
    else if (volume > 0 && volume < 60) setVolumeIcon(faVolumeDown);
    else setVolumeIcon(faVolumeUp);
  }, [volume]);

  // set volume in redux
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newVolume = parseInt(e.target.value);
    setPreviousVolume(newVolume);
    dispatch(changeVolume(newVolume));
  };

  // mute player on icon click
  const handleMute = () => {
    if (volume !== 0) dispatch(changeVolume(0));
    else dispatch(changeVolume(previousVolume));
  };

  return (
    <div className={styles.volumeSection}>
      <div className={styles.volumeIcon}>
        <FontAwesomeIcon
          style={{ cursor: "pointer" }}
          icon={volumeIcon}
          onClick={handleMute}
        />
      </div>
      <div className={styles.volumeInputDiv}>
        <input
          className={styles.volumeInput}
          type="range"
          name="volume"
          id="volume"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
        />
      </div>
      <div className={styles.volume}>{volume}</div>
    </div>
  );
};

export default VolumeControl;
