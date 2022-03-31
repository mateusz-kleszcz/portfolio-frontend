import React from "react";
import styles from "@styles/Home.module.scss";

const elipseImageSrc = "/ellipse.svg";

interface HeroImageProps {
  isBackground: boolean;
}

const HeroImage = ({ isBackground }: HeroImageProps) => {
  return (
    <div className={styles.heroImage}>
      {isBackground && <div className={styles.heroBackground}> </div>}
      <img src={elipseImageSrc} alt="elipse" />
    </div>
  );
};

export default HeroImage;
