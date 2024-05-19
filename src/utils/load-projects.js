export const loadProjects = async () => {
    const projectsResponse = await fetch('https://jsonplaceholder.typicode.com/posts');

    const projectsJson = await projectsResponse.json();

    const projects = projectsJson.map((projects, index) => {
        return {...projects}
    })

    return projects;
}
