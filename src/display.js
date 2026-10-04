function Display(container,projects = []){
    const header = document.createElement("header")

    const status =  document.createElement("div")

    const project_num = document.createElement("p")
    project_num.textContent = `${projects.todoList.length}`

    status.appendChild(project_num)
    header.appendChild(status)
    container.appendChild(header)

    const project_cards = document.createElement("div")
    projects.forEach(project => {
        let card = document.createElement("div")
        card.textContent = `${project.name}`
        project_cards.appendChild(card)
    })

    container.appendChild(project_cards)
}