import { Project } from 'types/Project';
import Link from 'next/link';
import styles from '@styles/Projects.module.scss'

const ProjectItem = ({ name, description, imageURL, link }: Project) => {
    return (
        <div
            className={styles.projectCard}
            style={{ backgroundImage: `url("${imageURL}")` }}
        >
            <span>
                <div className={styles.projectName}>
                    {name}
                </div>
                <div className={styles.projectDescription}>
                    {description}
                </div>
                <div className={styles.controls}>
                    <Link href={`/projects/${link}`}>
                        <button>Go to project</button>
                    </Link>
                    <button>GitHub</button>
                </div>
            </span>
        </div>
    );
};

export default ProjectItem;