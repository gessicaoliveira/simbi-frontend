import { Component } from 'react';
import './styles.css';
import { loadProjects } from '../../utils/load-projects';
import { Projects } from '../../components/Projects';
import { ButtonLoad } from '../../components/ButtonLoad';

export class Home extends Component {
  state = {
    projects: [],
    allProjects: [],
    page: 0,
    projectsPerSlide: 6,
    showAllProjects: false,
  };

  async componentDidMount() {
    await this.loadProjects();
  }

  loadProjects = async () => {
    const { page, projectsPerSlide } = this.state;
    const projects = await loadProjects();

    this.setState({
      projects: projects.slice(page, projectsPerSlide),
      allProjects: projects,
    });
  };

  loadMoreProjects = () => {
    const { allProjects } = this.state;
    this.setState({
      projects: allProjects,
      showAllProjects: true,
    });
  };

  render() {
    const { projects, showAllProjects } = this.state;

    return (
      <section className="container">
        <div className="title-container">
          <h3>Ver outros Projetos do Proponente</h3>
        </div>

        <Projects projects={projects} />

        <div className="button-container">
          {!showAllProjects && (
            <ButtonLoad
              text="+ VER TODOS"
              onClick={this.loadMoreProjects}
            />
          )}
        </div>
      </section>
    );
  }
}
