function Display(container, projects = []) {
    this.container = container;
    this.projects = projects;

    this.refresh = function () {
        this.container.innerHTML = ""

        const header = document.createElement("header");

        const status = document.createElement("div");

        const project_num = document.createElement("p");
        project_num.textContent = `${this.projects.length}`;

        status.appendChild(project_num);
        header.appendChild(status);

        this.container.appendChild(header);

        const project_cards = document.createElement("div");
        project_cards.classList.add("cards");

        this.projects.forEach(project => {
            let card = document.createElement("div");
            card.classList.add("card");

            let name = document.createElement("p");
            name.textContent = project.name;

            card.appendChild(name);

            let project_todos = document.createElement("ul");

            project.todoList.forEach(todo => {
                let new_todo = document.createElement("li");
                new_todo.textContent = todo.title;

                project_todos.appendChild(new_todo);
            });

            card.appendChild(project_todos);
            project_cards.appendChild(card);
        });

        this.container.appendChild(project_cards);
    };
}

export default Display