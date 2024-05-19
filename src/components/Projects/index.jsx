import { ProjectCard } from '../ProjectCard';
import Carousel from 'react-material-ui-carousel';
import './styles.css';

export const Projects = ({ projects }) => {
    const groupedProjects = [];
    for (let i = 0; i < projects.length; i += 3) {
        groupedProjects.push(projects.slice(i, i + 3));
    }
    return (
        <Carousel>
            {groupedProjects.map((group, index) => (
                <div className="carousel-slide" key={index}>
                    {group.map((project) => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            cover={project.cover}
                            title={project.title}
                            body={project.body}
                        />
                    ))}
                </div>
            ))}
        </Carousel>
    );
};
