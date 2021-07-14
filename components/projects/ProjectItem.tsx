import { Project } from 'types/Project';
import Link from 'next/link';
import styles from '@styles/Projects.module.scss'

const ProjectItem = ({ name, description, imageURL, link }: Project) => {
    return (
        <Link href={`/projects/${link}`}>
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
                        <button>Go to project</button>
                        <button>GitHub</button>
                    </div>
                </span>
            </div>
        </Link>
    );
};

export default ProjectItem;