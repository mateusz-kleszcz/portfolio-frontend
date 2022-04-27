import React from "react";
import HeroText from "./HeroText";
import styles from "@styles/Home.module.scss";
import HeroImage from "./HeroImage";
import ScrollButton from "./ScrollButton";

const containerVariants = {};

const Container = () => {
  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <HeroText />
        <HeroImage isBackground={true} />
      </div>
      <ScrollButton />
    </div>
  );
};

export default Container;
