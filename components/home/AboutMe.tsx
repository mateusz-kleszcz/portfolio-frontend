import React from "react";
import styles from "@styles/Home.module.scss";
import HighlightedHeader from "@components/layout/HighlightedHeader";
import AboutMeCard from "./AboutMeCard";
import SkillItem from "./SkillItem";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faAngular,
  faCss3,
  faCss3Alt,
  faGit,
  faGitAlt,
  faHtml5,
  faJs,
  faNodeJs,
  faPython,
  faReact,
  faSass,
} from "@fortawesome/free-brands-svg-icons";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

interface Skill {
  name: string;
  color: string;
  icon: IconProp;
  imgURL?: string;
  isFontAwesome: boolean;
}

const AboutMe = () => {
  const skills: Skill[] = [
    { name: "HTML5", color: "#FF5733", icon: faHtml5, isFontAwesome: true },
    { name: "CSS3", color: "#2965f1", icon: faCss3Alt, isFontAwesome: true },
    {
      name: "Sass",
      color: "#c69",
      icon: faSass,
      isFontAwesome: true,
    },
    { name: "JavaScript", color: "#f0db4f", icon: faJs, isFontAwesome: true },
    {
      name: "TypeScript",
      color: "#007acc",
      icon: faExclamationTriangle,
      imgURL: "/typescript.svg",
      isFontAwesome: false,
    },
    {
      name: "React / Redux",
      color: "#61DBFB",
      icon: faReact,
      isFontAwesome: true,
    },
    {
      name: "React Native",
      color: "#61DBFB",
      icon: faReact,
      isFontAwesome: true,
    },
    {
      name: "Angular",
      color: "#dd1b16",
      icon: faAngular,
      isFontAwesome: true,
    },
    { name: "Git", color: "#F1502F", icon: faGitAlt, isFontAwesome: true },
    { name: "Node.js", color: "#68A063", icon: faNodeJs, isFontAwesome: true },
    {
      name: "MongoDB",
      color: "#F1502F",
      icon: faExclamationTriangle,
      imgURL: "mongodb.png",
      isFontAwesome: false,
    },
    {
      name: "Python",
      color: "#306998",
      icon: faPython,
      isFontAwesome: true,
    },
  ];

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
        {skills.map((skill) => (
          <SkillItem {...skill} />
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
