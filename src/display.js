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

            card.addEventListener("click", () => {
                let project_view = document.createElement("div");
                project_view.classList.add("project-view");

                let project_view_close = document.createElement("button");
                project_view_close.textContent = "close"
                project_view_close.addEventListener("click", () => {
                    project_view.remove();
                });

                let project_view_top_bar = document.createElement("div");
                project_view_top_bar.classList.add("project-view-top-bar");

                project_view_top_bar.appendChild(project_view_close);

                let project_view_content = document.createElement("div")
                project_view_content.classList.add("project-view-content");

                project.todoList.forEach(todo =>{
                    let todo_card = document.createElement("div");
                    todo_card.classList.add("todo-card")

                    let todo_card_topbar = document.createElement("div");
                    todo_card.classList.add("todo-card-topbar")                    

                    let todo_card_title = document.createElement("p");
                    todo_card_title.textContent = todo.title

                    //let card_close = document.createElement("button");
                    //card_close.textContent = "Close";

                    todo_card_topbar.appendChild(todo_card_title);
                    //card_topbar.appendChild(card_close);

                    let todo_card_content = document.createElement("div");

                    let todo_card_description = document.createElement("p");
                    todo_card_description.textContent = todo.description;

                    todo_card_content.appendChild(todo_card_description);

                    let todo_card_dueDate = document.createElement("p");
                    todo_card_dueDate.textContent = `Due date: ${todo.dueDate}`

                    todo_card_content.appendChild(todo_card_dueDate);

                    let todo_card_priority = document.createElement("p");
                    todo_card_priority.textContent = `Priority: ${todo.priority}`

                    todo_card_content.appendChild(todo_card_priority);

                    todo_card.appendChild(todo_card_topbar);
                    todo_card.appendChild(todo_card_content);

                    project_view_content.appendChild(todo_card);
                })
                
                project_view.appendChild(project_view_top_bar);
                project_view.appendChild(project_view_content);

                this.container.appendChild(project_view)
            })

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