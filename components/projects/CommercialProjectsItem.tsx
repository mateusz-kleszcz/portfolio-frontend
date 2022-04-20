import { Project } from "types/Project";
import styles from "@styles/Projects.module.scss";
import getConfig from "next/config";

const CommercialProjectsItem = ({
  name,
  technologies,
  description,
  imageURL,
  link,
}: Project) => {
  const { publicRuntimeConfig } = getConfig();

  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <h2 className={styles.projectName}>{name}</h2>
        <h2 className={styles.projectTechnologies}>
          {technologies.join(", ")}
        </h2>
        <p className={styles.projectDescription}>{description}</p>
      </div>
      <a target="_blank" href={link}>
        <div className={styles.projectImage}>
          <div className={styles.projectHighlight}></div>
          <img src={imageURL} alt={name} />
        </div>
      </a>
    </div>
  );
};

export default CommercialProjectsItem;
