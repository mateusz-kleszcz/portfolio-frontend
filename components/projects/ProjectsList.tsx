import { Project } from "types/Project";
import ProjectItem from "./ProjectItem";
import styles from '@styles/Projects.module.scss'
import CommercialProjectsItem from "./CommercialProjectsItem";

const ProjectsList = () => {

    const list: Project[] = [
        {
            id: 1,
            name: 'Song player',
            description: 'Basic online player',
            imageURL: '/music-player.png',
            link: 'audioplayer',
        },
        {
            id: 2,
            name: 'Screenshot Generator',
            description: 'Lorem ipsum',
            imageURL: '/eee.png',
            link: 'screenshotgenerator',
        },
        {
            id: 3,
            name: 'Workout Timer',
            description: 'Lorem ipsum',
            imageURL: '/music-player.png',
            link: 'workouttimer',
        }
    ]

    const commercial: Project[] = [
        {
            id: 1,
            name: 'Seed Poland',
            description: 'Website of Cracovian startup, created via WordPress',
            imageURL: '/seed-poland.png',
            link: 'https://seedpoland.com/',
        },
        {
            id: 2,
            name: 'Slava Rent',
            description: 'Website of Polish company to car rent, created in NextJS, React, NodeJS, MongoDB',
            imageURL: '/slava-rent.png',
            link: 'http://slawarent.pl/'
        },
        {
            id: 3,
            name: 'Błękitna planeta',
            description: 'Website of Polish Pet shops, created in NextJS, React',
            imageURL: '/blekitna-planeta.png',
            link: '#',
        }
    ]

    const projects = list.map(project => <ProjectItem {...project} key={project.id} />)
    const commercialProjects = commercial.map(project => <CommercialProjectsItem {...project} key={project.id} />)

    return (
        <>
            <h1>My projects:</h1>
            <div className={styles.projectList}>
                {projects}
            </div>
            <h1>My commercial projects</h1>
            <div className={styles.projectList}>
                {commercialProjects}
            </div>
        </>
    );
};

export default ProjectsList;