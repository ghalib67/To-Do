function LoadHomepage(container){
    let page = document.createElement("div")
    page.classList.add("homepage")

    let title = document.createElement("div")
    title.classList.add("title")
    title.textContent = "The Rustic Spoon" 
    page.appendChild(title)

    let slogan = document.createElement("div")
    slogan.classList.add("slogan")

    let text = document.createElement("p")
    text.textContent = "The Rustic Spoon serves hearty, delicious meals made with fresh ingredients! Our cozy atmosphere and friendly service make every visit feel warm and welcoming. It's the perfect place to relax, enjoy great food, and spend time with the people you love."
    slogan.appendChild(text)
    
    let signature = document.createElement("p")
    signature.textContent = "— The Rustic Spoon"
    slogan.appendChild(signature)
    
    page.appendChild(slogan)

    let hours = document.createElement("div")
    hours.classList.add("hours")

    let hours_title = document.createElement("p")
    hours_title.textContent = "Hours"

    let hours_content = document.createElement("ul")

    let schedule = [
        "Sunday: 8am - 8pm",
        "Monday: 6am - 6pm",
        "Tuesday: 6am - 6pm",
        "Wednesday: 6am - 6pm",
        "Thursday: 6am - 10pm",
        "Friday: 6am - 10pm",
        "Saturday: 8am - 10pm"
    ]

    schedule.forEach(day => {
        let li = document.createElement("li")
        li.textContent = day
        hours_content.appendChild(li)
    })

    hours.appendChild(hours_title)
    hours.appendChild(hours_content)
    page.appendChild(hours)

    let location = document.createElement("div")
    location.classList.add("location")
    
    let location_title = document.createElement("p")
    location_title.textContent = "Location"

    let location_text = document.createElement("p")
    location_text.textContent = "42 Oak Avenue, Riverside District, Springfield, USA"

    location.appendChild(location_title)
    location.appendChild(location_text)
    page.appendChild(location)

    let credits = document.createElement("div")
    credits.classList.add("credits")

    container.appendChild(page)
    //container.appendChild(credits)
}

export default LoadHomepage