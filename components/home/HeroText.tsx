import React from "react";
import styles from "@styles/Home.module.scss";
import { motion } from "framer-motion";

const heroTextVariants = {
  hidden: {
    oppacity: 0,
    x: "-100vw",
  },
  visible: {
    oppacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 30,
    },
  },
};

const HeroText = () => {
  return (
    <motion.div
      className={styles.heroText}
      variants={heroTextVariants}
      initial="hidden"
      animate="visible"
    >
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
    </motion.div>
  );
};

export default HeroText;
