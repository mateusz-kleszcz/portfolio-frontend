import React from "react";
import styles from "@styles/Home.module.scss";

const elipseImageSrc = "/ellipse.svg";

const HeroImage = () => {
  return (
    <div className={styles.heroImage}>
      <div className={styles.heroBackground}> </div>
      <img src={elipseImageSrc} alt="elipse" />
    </div>
  );
};

export default HeroImage;
