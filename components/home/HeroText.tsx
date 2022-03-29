import React from "react";
import styles from "@styles/Home.module.scss";

const HeroText = () => {
  return (
    <div className={styles.heroText}>
      <h2>Cześć, jestem</h2>
      <h1>mateusz</h1>
      <h1>kleszcz</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur ex
        earum ducimus! Voluptatem quisquam nam quidem quaerat explicabo
        consequatur
      </p>
      <button>skontaktuj się</button>
    </div>
  );
};

export default HeroText;
