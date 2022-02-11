import styles from "@styles/Player.module.scss";
import VolumeControl from "./VolumeControl";
import ControlsSection from "./ControlsSection";
import { ReactElement } from "react";
import InfoSection from "./InfoSection";

const SongInfo = (): ReactElement => {
  return (
    <div id={styles.songInfo}>
      <InfoSection />
      <ControlsSection />
      <VolumeControl />
    </div>
  );
};

export default SongInfo;
