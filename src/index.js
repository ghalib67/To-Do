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
    ]),

    new Project("Programming", [
        new ToDo(
            "Practice Python",
            "Work on Python exercises",
            "2026-10-09",
            "Medium"
        ),
        new ToDo(
            "Practice JavaScript",
            "Solve JavaScript problems",
            "2026-10-10",
            "High"
        )
    ]),

    new Project("Fitness", [
        new ToDo(
            "Go to the gym",
            "Complete today's workout",
            "2026-10-05",
            "High"
        ),
        new ToDo(
            "Stretch",
            "Do a 15 minute stretching session",
            "2026-10-06",
            "Low"
        )
    ]),

    new Project("Reading", [
        new ToDo(
            "Read programming book",
            "Read one chapter",
            "2026-10-11",
            "Medium"
        )
    ]),

    new Project("University", [
        new ToDo(
            "Complete assignment",
            "Finish the database assignment",
            "2026-10-09",
            "High"
        ),
        new ToDo(
            "Review notes",
            "Review this week's lecture notes",
            "2026-10-10",
            "Medium"
        )
    ]),

    new Project("Web Development", [
        new ToDo(
            "Practice CSS",
            "Build a responsive webpage",
            "2026-10-12",
            "Medium"
        ),
        new ToDo(
            "Learn Webpack",
            "Practice modules and bundling",
            "2026-10-13",
            "High"
        )
    ]),

    new Project("Gaming", [
        new ToDo(
            "Try new game",
            "Play for an hour",
            "2026-10-08",
            "Low"
        )
    ]),

    new Project("Final Year Project", [
        new ToDo(
            "Research project ideas",
            "Research possible project requirements",
            "2026-10-15",
            "Medium"
        ),
        new ToDo(
            "Design database",
            "Create an initial database schema",
            "2026-10-17",
            "High"
        )
    ])
];


console.log(projects)
Display(content,    projects)