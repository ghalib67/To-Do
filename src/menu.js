import testImage from "./images/test.jpg"

function loadMenu(container) {
    let beverages = [
        {
            name: "Classic Lemonade",
            desc: "Freshly squeezed lemons mixed with cold water and a touch of sweetness.",
            price: "$3.50",
            image: testImage
        },
        {
            name: "Iced Peach Tea",
            desc: "Refreshing black tea infused with sweet peach flavor and served over ice.",
            price: "$4.00",
            image: testImage
        }
    ]

    let sides = [
        {
            name: "Garlic Herb Fries",
            desc: "Crispy golden fries seasoned with garlic, herbs, and a pinch of sea salt.",
            price: "$4.50",
            image: testImage
        },
        {
            name: "Creamy Coleslaw",
            desc: "Freshly shredded cabbage and carrots tossed in our creamy house dressing.",
            price: "$3.75",
            image: testImage
        }
    ]

    let main_dishes = [
        {
            name: "Rustic Chicken Plate",
            desc: "Tender grilled chicken served with roasted vegetables and seasoned potatoes.",
            price: "$12.50",
            image: testImage
        },
        {
            name: "Creamy Mushroom Pasta",
            desc: "Penne pasta tossed with sautéed mushrooms in a rich and creamy garlic sauce.",
            price: "$11.00",
            image: testImage
        },
        {
            name: "Grilled Beef Steak",
            desc: "Juicy grilled beef steak served with herb butter and a side of roasted vegetables.",
            price: "$18.50",
            image: testImage
        },
        {
            name: "Crispy Chicken Burger",
            desc: "Crispy fried chicken topped with lettuce, tomato, and our homemade sauce.",
            price: "$10.50",
            image: testImage
        },
        {
            name: "Garden Vegetable Pasta",
            desc: "Pasta tossed with fresh seasonal vegetables, herbs, and a light tomato sauce.",
            price: "$10.00",
            image: testImage
        },
        {
            name: "Honey Glazed Chicken",
            desc: "Tender chicken glazed with honey and herbs, served with seasoned rice and vegetables.",
            price: "$13.50",
            image: testImage
        },
        {
            name: "Classic Beef Lasagna",
            desc: "Layers of pasta, seasoned beef, rich tomato sauce, and melted cheese baked until golden.",
            price: "$14.00",
            image: testImage
        },
        {
            name: "Herb Roasted Salmon",
            desc: "Oven-roasted salmon seasoned with fresh herbs and served with lemon and vegetables.",
            price: "$17.50",
            image: testImage
        }
    ]

    let page = document.createElement("div")
    page.classList.add("menu")

    let title = document.createElement("div")
    title.textContent = "Menu"
    title.classList.add("title")
    page.appendChild(title)

    let title_beverages = document.createElement("div")
    title_beverages.textContent = "Beverages"
    title_beverages.classList.add("title")
    page.appendChild(title_beverages)

    beverages.forEach(item => {
        let div = document.createElement("div")
        let name = document.createElement("p")
        name.textContent = item.name

        let desc = document.createElement("p")
        desc.textContent = item.desc

        let price = document.createElement("p")
        price.textContent = item.price

        let image = document.createElement("img")
        image.src = item.image

        div.appendChild(name)
        div.appendChild(desc)
        div.appendChild(price)
        div.appendChild(image)
        page.appendChild(div)
    })

    let title_sides = document.createElement("div")
    title_sides.textContent = "Sides"
    title_sides.classList.add("title")
    page.appendChild(title_sides)

    sides.forEach(item => {
        let div = document.createElement("div")
        let name = document.createElement("p")
        name.textContent = item.name

        let desc = document.createElement("p")
        desc.textContent = item.desc

        let price = document.createElement("p")
        price.textContent = item.price

        let image = document.createElement("img")
        image.src = item.image

        div.appendChild(name)
        div.appendChild(desc)
        div.appendChild(price)
        div.appendChild(image)
        page.appendChild(div)
    })

    let title_main_dishes = document.createElement("div")
    title_main_dishes.textContent = "Main Dishes"
    title_main_dishes.classList.add("title")
    page.appendChild(title_main_dishes)

    main_dishes.forEach(item => {
        let div = document.createElement("div")
        
        let name = document.createElement("p")
        name.textContent = item.name

        let desc = document.createElement("p")
        desc.textContent = item.desc

        let price = document.createElement("p")
        price.textContent = item.price

        let image = document.createElement("img")
        image.src = item.image

        div.appendChild(name)
        div.appendChild(desc)
        div.appendChild(price)
        div.appendChild(image)
        page.appendChild(div)
    })

    container.appendChild(page)
}

export default loadMenu