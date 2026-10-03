function LoadContactUsPage(container){
    let page = document.createElement("div")
    page.classList.add("contact-us")

    let title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "Contact Us"
    page.appendChild(title)

    let chef = document.createElement("div")

    let name_chef = document.createElement("p")
    name_chef.textContent = "Daniel Carter"

    let number_chef = document.createElement("p")
    number_chef.textContent = "+1 555-0101"

    let email_chef = document.createElement("p")
    email_chef.textContent = "daniel.carter@example.com"

    chef.appendChild(name_chef)
    chef.appendChild(number_chef)
    chef.appendChild(email_chef)


    let manager = document.createElement("div")

    let name_manager = document.createElement("p")
    name_manager.textContent = "Sarah Mitchell"

    let number_manager = document.createElement("p")
    number_manager.textContent = "+1 555-0102"

    let email_manager = document.createElement("p")
    email_manager.textContent = "sarah.mitchell@example.com"

    manager.appendChild(name_manager)
    manager.appendChild(number_manager)
    manager.appendChild(email_manager)


    let waiter = document.createElement("div")

    let name_waiter = document.createElement("p")
    name_waiter.textContent = "Alex Morgan"

    let number_waiter = document.createElement("p")
    number_waiter.textContent = "+1 555-0103"

    let email_waiter = document.createElement("p")
    email_waiter.textContent = "alex.morgan@example.com"

    waiter.appendChild(name_waiter)
    waiter.appendChild(number_waiter)
    waiter.appendChild(email_waiter)


    page.appendChild(chef)
    page.appendChild(manager)
    page.appendChild(waiter)

    container.appendChild(page)
}

export default LoadContactUsPage