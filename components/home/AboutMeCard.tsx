import React from "react";
import styles from "@styles/Home.module.scss";

interface AboutMeCardProps {
  header: string;
  content: string;
}

const AboutMeCard = ({ header, content }: AboutMeCardProps) => {
  return (
    <div className={styles.aboutMeCard}>
      <div className={styles.cardHighlight}></div>
      <h1>{header}</h1>
      <p>{content}</p>
    </div>
  );
};

export default AboutMeCard;
