import ToDo from "./to-do";
import Project from "./project";
import Display from "./display";
import "./styles.css";

const content = document.querySelector("#content")

const projects = [
    new Project("School", [
        new ToDo(
            "Study JavaScript",
            "Learn about constructors and modules",
            "2026-10-05",
            "High"
        ),
        new ToDo(
            "Study Calculus",
            "Practice integration",
            "2026-10-06",
            "High"
        )
    ]),

    new Project("Personal", [
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
    ]),

    new Project("Odin Project", [
        new ToDo(
            "Finish To-Do project",
            "Complete the project requirements",
            "2026-10-07",
            "High"
        )
    ])
];


console.log(projects)
Display(content,    projects)