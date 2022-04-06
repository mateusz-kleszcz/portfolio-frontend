import { Project } from "types/Project";
import ProjectItem from "./ProjectItem";
import styles from "@styles/Projects.module.scss";
import CommercialProjectsItem from "./CommercialProjectsItem";
import HighlightedHeader from "@components/layout/HighlightedHeader";

const ProjectsList = () => {
  const list: Project[] = [
    {
      id: 1,
      name: "Song player",
      technologies: ["html", "sass", "react.js", "node.js"],
      description:
        "Song player, which allows streaming music hosted by heroku server and creating custom playlists.",
      imageURL: "/music-player.png",
      link: "portfolio/audioplayer",
    },
    // {
    //   id: 2,
    //   name: "Screenshot Generator",
    //   technologies: ["html", "css", "react.js"],
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nisi id lorem pellentesque elementum. Integer sollicitudin quis magna commodo porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    //   imageURL: "/music-player.png",
    //   link: "screenshotgenerator",
    // },
    {
      id: 3,
      name: "Workout Timer",
      technologies: ["html", "css", "react.js"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nisi id lorem pellentesque elementum. Integer sollicitudin quis magna commodo porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      imageURL: "/music-player.png",
      link: "portfolio/workouttimer",
    },
    {
      id: 4,
      name: "Chess",
      technologies: ["html", "css", "react.js"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eleifend nisi id lorem pellentesque elementum. Integer sollicitudin quis magna commodo porta. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
      imageURL: "/music-player.png",
      link: "chess",
    },
  ];

  const commercial: Project[] = [
    {
      id: 1,
      name: "Seed Poland",
      technologies: ["html", "css", "react.js"],
      description: "Website of Cracovian startup, created via WordPress",
      imageURL: "/seed-poland.png",
      link: "https://seedpoland.com/",
    },
    {
      id: 2,
      name: "Slava Rent",
      technologies: ["html", "css", "react.js"],
      description:
        "Website of Polish company for car renting, created in NextJS, React, NodeJS, MongoDB",
      imageURL: "/slava-rent.png",
      link: "http://slawarent.pl/",
    },
    {
      id: 3,
      name: "Błękitna planeta",
      technologies: ["html", "css", "react.js"],
      description: "Website of Polish Pet shops, created in NextJS, React",
      imageURL: "/blekitna-planeta.png",
      link: "#",
    },
  ];

  const projects = list.map((project) => (
    <ProjectItem {...project} key={project.id} />
  ));
  const commercialProjects = commercial.map((project) => (
    <CommercialProjectsItem {...project} key={project.id} />
  ));

  return (
    <div className={styles.projectContainer}>
      <HighlightedHeader content="my projects" />
      <div className={styles.projectList}>{projects}</div>
      <HighlightedHeader content="my commercial projects" />
      <div className={styles.projectList}>{commercialProjects}</div>
    </div>
  );
};

export default ProjectsList;
