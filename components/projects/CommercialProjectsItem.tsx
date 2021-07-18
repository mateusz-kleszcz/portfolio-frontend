import { Project } from 'types/Project';
import styles from '@styles/Projects.module.scss'
import getConfig from 'next/config'

const CommercialProjectsItem = ({ name, description, imageURL, link }: Project) => {

    const { publicRuntimeConfig } = getConfig()

    return (
        <div
            className={styles.projectCard}
            style={{ backgroundImage: `url("${publicRuntimeConfig.API_ADDRESS}/${imageURL}")` }}
        >
            <span>
                <div className={styles.projectName}>
                    {name}
                </div>
                <div className={styles.projectDescription}>
                    {description}
                </div>
                <div className={styles.controls}>
                    <a href={link}>
                        <button>See finished site</button>
                    </a>
                </div>
            </span>
        </div>
    );
};

export default CommercialProjectsItem;