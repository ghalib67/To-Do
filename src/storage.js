import Project from "./project";
import ToDo from "./to-do";

function saveProjects(projects) {
    localStorage.setItem("projects", JSON.stringify(projects));
}

function loadProjects() {
    const savedProjects = localStorage.getItem("projects");

    if (!savedProjects) {
        return null;
    }

    const parsedProjects = JSON.parse(savedProjects);

    return parsedProjects.map(project => {
        const todos = project.todoList.map(todo => {
            return new ToDo(
                todo.title,
                todo.description,
                todo.dueDate,
                todo.priority
            );
        });

        return new Project(project.name, todos);
    });
}

export { saveProjects, loadProjects };
