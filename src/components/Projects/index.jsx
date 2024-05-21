import React from 'react';
import Carousel from 'react-material-ui-carousel';
import Grid from '@mui/material/Grid';
import { ProjectCard } from '../ProjectCard';
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
        <Carousel
            navButtonsAlwaysVisible
            navButtonsWrapperProps={{
                style: {
                    opacity: 0.4,
                }
            }}
        >
            {groupedProjects.map((group, index) => (
                <div className="carousel-slide" key={index}>
                    <Grid container spacing={2} className="grid-container">
                        {group.map((project) => {
                            const content = (project.resumo && project.resumo.toLowerCase() !== 'null')
                                ? project.resumo
                                : project.sinopse;

                            const valueApproved = formatCurrency(project.valor_aprovado);
                            const valueCaptured = formatCurrency(project.valor_captado);

                            return (
                                <Grid item className="grid-item" key={project.project_id}>
                                    <ProjectCard
                                        id={project.project_id}
                                        name={project.nome}
                                        city={project.municipio}
                                        state={project.uf}
                                        value_approved={valueApproved}
                                        value_captured={valueCaptured}
                                        content={content}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </div>
            ))}
        </Carousel>
    );
};
