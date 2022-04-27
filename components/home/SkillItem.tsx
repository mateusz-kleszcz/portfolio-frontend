import React from "react";
import styles from "@styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { motion } from "framer-motion";
import { NONAME } from "dns";

interface Skill {
  name: string;
  color: string;
  icon: IconProp;
  imgURL?: string;
  isFontAwesome: boolean;
}

const skillVariants = {
  initial: {
    scale: 1,
    filter: "none",
    transition: {
      duration: 0.3,
    },
  },
  hover: {
    scale: 1.1,
    filter: "drop-shadow(0px 0px 8px rgba(0, 0, 0, .7))",
    transition: {
      duration: 0.3,
    },
  },
};

const SkillItem = ({ name, color, icon, imgURL, isFontAwesome }: Skill) => {
  return (
    <motion.div
      className={styles.skill}
      variants={skillVariants}
      initial="initial"
      whileHover="hover"
      drag
      dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
    >
      {isFontAwesome ? (
        <FontAwesomeIcon icon={icon} color={color} />
      ) : (
        <img src={imgURL} />
      )}
      <p>{name}</p>
    </motion.div>
  );
};

export default SkillItem;
