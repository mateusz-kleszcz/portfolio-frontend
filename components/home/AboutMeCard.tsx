import React from "react";
import styles from "@styles/Home.module.scss";
import { motion } from "framer-motion";

interface AboutMeCardProps {
  header: string;
  content: string;
}

const cardVariants = {
  initial: {
    scale: 1,
    boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.25);",
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.7)",
    transition: {
      duration: 0.3,
    },
  },
};

const highlightVariants = {
  initial: {
    scale: 1,
    rotate: 5,
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    rotate: 10,
    transition: {
      duration: 0.3,
    },
  },
};

const AboutMeCard = ({ header, content }: AboutMeCardProps) => {
  return (
    <motion.div
      className={styles.abouteMeCardContainer}
      initial="initial"
      whileHover="hover"
    >
      <motion.div className={styles.aboutMeCard} variants={cardVariants}>
        <h1>{header}</h1>
        <p>{content}</p>
      </motion.div>
      <motion.div
        className={styles.cardHighlight}
        variants={highlightVariants}
      ></motion.div>
    </motion.div>
  );
};

export default AboutMeCard;
