import React from "react";
import HeroText from "./HeroText";
import styles from "@styles/Home.module.scss";
import HeroImage from "./HeroImage";
import ScrollButton from "./ScrollButton";

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <HeroText />
        <HeroImage />
      </div>
      <ScrollButton />
    </div>
  );
};

export default Container;
