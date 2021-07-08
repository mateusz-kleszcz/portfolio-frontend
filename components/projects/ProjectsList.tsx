import { Project } from "types/Project";
import ProjectItem from "./ProjectItem";

const ProjectsList = () => {

    const list: Project[] = [
        {
            id: 1,
            name: 'Song player',
            description: 'Basic online player',
            imageURL: '/eee.png',
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
            imageURL: '/eee.png',
            link: 'workouttimer',
        }
    ]

    const projects = list.map(item => <ProjectItem {...item} key={item.id} />)

    return (
        <>
            {projects}
        </>
    );
};

export default ProjectsList;