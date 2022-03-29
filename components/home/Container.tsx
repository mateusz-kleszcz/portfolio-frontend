import React from "react";
import HeroText from "./HeroText";
import styles from "@styles/Home.module.scss";

const Container = () => {
  return (
    <div className={styles.container}>
      <HeroText />
    </div>
  );
};

export default Container;
