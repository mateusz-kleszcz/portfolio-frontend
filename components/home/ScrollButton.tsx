import React from "react";
import styles from "@styles/Home.module.scss";

const downButtonSrc = "/down-button.svg";

const ScrollButton = () => {
  return (
    <div className={styles.scrollButton}>
      <img src={downButtonSrc} alt="down" />
      <h1>see more</h1>
      <img src={downButtonSrc} alt="down" />
    </div>
  );
};

export default ScrollButton;
