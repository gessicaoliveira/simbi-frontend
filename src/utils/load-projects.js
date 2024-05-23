export const loadProjects = async () => {
    const projectsResponse = await fetch('http://localhost:8000/api/v1/projects');
    const projectsJson = await projectsResponse.json();
    const projects = projectsJson.data.map(projects => {
        return {...projects}
    })
    return projects;
}
