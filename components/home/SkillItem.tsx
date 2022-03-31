import React from "react";
import styles from "@styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5 } from "@fortawesome/free-brands-svg-icons";

const SkillItem = () => {
  return (
    <div className={styles.skill}>
      <FontAwesomeIcon icon={faHtml5} />
    </div>
  );
};

export default SkillItem;
