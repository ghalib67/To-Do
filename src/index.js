import ToDo from "./to-do";
import Project from "./project";
import "./styles.css";

const todos = [
    new ToDo(
        "Study JavaScript",
        "Learn about constructors and modules",
        "2026-10-05",
        "High"
    ),

    new ToDo(
        "Finish To-Do project",
        "Complete the project requirements",
        "2026-10-07",
        "High"
    ),

    new ToDo(
        "Go for a walk",
        "Walk for 30 minutes",
        "2026-10-06",
        "Low"
    ),

    new ToDo(
        "Clean room",
        "Organize desk and shelves",
        "2026-10-08",
        "Medium"
    )
];

const test = new Project(todos)

console.log(test)