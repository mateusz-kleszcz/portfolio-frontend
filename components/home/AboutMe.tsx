import React from "react";
import styles from "@styles/Home.module.scss";
import HighlightedHeader from "@components/layout/HighlightedHeader";
import AboutMeCard from "./AboutMeCard";
import SkillItem from "./SkillItem";

const AboutMe = () => {
  return (
    <div className={styles.aboutMe}>
      <HighlightedHeader content="about me" />
      <div className={styles.row}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          perspiciatis, cupiditate repellat necessitatibus adipisci quas, eos
          nihil assumenda explicabo incidunt nesciunt corrupti at recusandae.
          Consequuntur voluptatibus ducimus iste quis ab?
        </p>
        <AboutMeCard
          header="jakieś pytanie?"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          perspiciatis, cupiditate repellat"
        />
        <AboutMeCard
          header="Podsekcja"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          perspiciatis, cupiditate repellat"
        />
        <AboutMeCard
          header="Albo może coś dłuższego?"
          content=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
          perspiciatis, cupiditate repellat"
        />
      </div>
      <HighlightedHeader content="my skills" />
      <div className={styles.mySkills}>
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
        <SkillItem />
      </div>
    </div>
  );
};

export default AboutMe;
