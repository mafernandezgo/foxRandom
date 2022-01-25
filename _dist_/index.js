
let totalImages = 0
let loadImages = 0

const max = 123 
const min = 1
const random = () => Math.floor(Math.random()*(max - min)) + min

const createImageNode = () => {
    const container =  document.createElement("div")
    container.className = "p-4"

    const image = document.createElement("img")
    image.className = "mx-auto rounded-md bg-gray-300"
    image.width = "320"
    image.dataset.src = `https://randomfox.ca/images/${random()}.jpg`

    container.appendChild(image)
    return container
}

const images = document.querySelector("#images")

const addButton = document.querySelector(".add")

const addImage = () => {
    const finalImage = createImageNode()
    images.append(finalImage)
    registerImage(finalImage)
    totalImages ++
    imgStatus ()
}
addButton.addEventListener("click", addImage)

const delButton = document.querySelector(".delete")

const delImages = () =>{
    images.innerHTML = ""
}
delButton.addEventListener("click",delImages)

function imgStatus() {
    console.log (`⚪️ Total Imágenes: ${totalImages}`)
    console.log (`🟣 Load Imágenes: ${loadImages}`)
    console.log("---------------------------------")
}

const isIntersecting = (entry) => {
    return entry.isIntersecting
}

const loadImage = (entry) => {
    const container = entry.target
    const imagen = container.firstChild
    const url = imagen.dataset.src

    imagen.src=url

    loadImages ++
    imgStatus()

    observer.unobserve(container)
}

const observer = new IntersectionObserver ((entries) =>{
entries.filter(isIntersecting).forEach(loadImage)
})

const registerImage = (image) => {
    observer.observe(image)
}