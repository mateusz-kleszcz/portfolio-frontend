import React from "react";
import styles from "@styles/Home.module.scss";

const HeroText = () => {
  return (
    <div className={styles.heroText}>
      <h2>Hi, my name is</h2>
      <div className={styles.name}>
        <h1>mateusz</h1>
        <h1>kleszcz</h1>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ex
        earum ducimus!
      </p>
      <button>Contact me</button>
    </div>
  );
};

export default HeroText;
