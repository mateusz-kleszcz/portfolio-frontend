import { Project } from "types/Project";
import Link from "next/link";
import styles from "@styles/Projects.module.scss";

const ProjectItem = ({
  name,
  technologies,
  description,
  imageURL,
  link,
}: Project) => {
  return (
    <div className={styles.projectCard}>
      <div className={styles.projectInfo}>
        <h2 className={styles.projectName}>{name}</h2>
        <h2 className={styles.projectTechnologies}>
          {technologies.join(", ")}
        </h2>
        <p className={styles.projectDescription}>{description}</p>
      </div>
      <Link href={link}>
        <div className={styles.projectImage}>
          <div className={styles.projectHighlight}></div>
          <img src={imageURL} alt={name} />
        </div>
      </Link>
    </div>
  );
};

export default ProjectItem;
