import { ProjectCard } from '../ProjectCard';
import Carousel from 'react-material-ui-carousel';
import './styles.css';

const formatCurrency = (value) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value);
};

export const Projects = ({ projects }) => {
    const groupedProjects = [];
    for (let i = 0; i < projects.length; i += 3) {
        groupedProjects.push(projects.slice(i, i + 3));
    }

    return (
        <Carousel>
            {groupedProjects.map((group, index) => (
                <div className="carousel-slide" key={index}>
                    {group.map((project) => {
                        const content = (project.resumo && project.resumo.toLowerCase() !== 'null')
                            ? project.resumo
                            : project.sinopse;

                        const valueApproved = formatCurrency(project.valor_aprovado);
                        const valueCaptured = formatCurrency(project.valor_captado);

                        return (
                            <ProjectCard
                                key={project.project_id}
                                id={project.project_id}
                                name={project.nome}
                                city={project.municipio}
                                state={project.uf}
                                value_approved={valueApproved}
                                value_captured={valueCaptured}
                                content={content}
                            />
                        );
                    })}
                </div>
            ))}
        </Carousel>
    );
};
