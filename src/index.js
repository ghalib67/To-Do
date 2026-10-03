import "./styles.css";
import LoadHomepage from "./homepage";
import loadMenu from "./menu";
import LoadContactUsPage from "./contactus";

const home = document.querySelector(".home-btn")
const menu = document.querySelector(".menu-btn")
const contact = document.querySelector(".contact-btn")

const content = document.querySelector("#content")
LoadHomepage(content)

home.addEventListener("click",() => {
    let div = content.querySelector("div")
    content.removeChild(div)
    LoadHomepage(content)
})

menu.addEventListener("click",() => {
    let div = content.querySelector("div")
    content.removeChild(div)
    loadMenu(content)
})

contact.addEventListener("click",() => {
    let div = content.querySelector("div")
    content.removeChild(div)
    LoadContactUsPage(content)
})

console.log("HEELO")