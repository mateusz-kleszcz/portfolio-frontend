import style from '@styles/Projects.module.scss'
import { Project } from 'types/Project';
import Image from 'next/image'
import Link from 'next/link';

const ProjectItem = ({ name, description, imageURL, link }: Project) => {
    return (
        <Link href={`/projects/${link}`}>
            <div className="project-card">
                <div className="project-name">
                    {name}
                </div>
                <Image src={imageURL} width={128} height={77} />
                <div className="project-description">
                    {description}
                </div>
            </div>
        </Link>
    );
};

export default ProjectItem;