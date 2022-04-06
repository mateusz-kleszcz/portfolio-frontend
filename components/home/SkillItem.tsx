import React from "react";
import styles from "@styles/Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Skill {
  name: string;
  color: string;
  icon: IconProp;
  imgURL?: string;
  isFontAwesome: boolean;
}

const SkillItem = ({ name, color, icon, imgURL, isFontAwesome }: Skill) => {
  return (
    <div className={styles.skill}>
      {isFontAwesome ? (
        <FontAwesomeIcon icon={icon} color={color} />
      ) : (
        <img src={imgURL} />
      )}
      <p>{name}</p>
    </div>
  );
};

export default SkillItem;
