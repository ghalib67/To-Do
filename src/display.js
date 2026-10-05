function Display(container,projects = []){
    const header = document.createElement("header")

    const status =  document.createElement("div")

    const project_num = document.createElement("p")
    project_num.textContent = `${projects.length}`

    status.appendChild(project_num)
    header.appendChild(status)
    container.appendChild(header)

    const project_cards = document.createElement("div")
    project_cards.classList.add("cards")
    projects.forEach(project => {
        let card = document.createElement("div")
        card.classList.add("card")
        
        let name = document.createElement("p")

        name.textContent = project.name
        card.appendChild(name)

        let project_todos = document.createElement("ul")
        project.todoList.forEach(todo => {
            let new_todo = document.createElement("li")
            new_todo.textContent = todo.title

            project_todos.appendChild(new_todo)
        });

        card.appendChild(project_todos)
        project_cards.appendChild(card)

    })

    container.appendChild(project_cards)
}

export default Display