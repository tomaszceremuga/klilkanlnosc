let amount = 0
const body = document.querySelector('body')
let move = false

const createBox = (e) => {

    const box = document.createElement("div")

    box.setAttribute('class', 'box')
    box.style.left = `${e.pageX - 103}px`
    box.style.top = `${e.pageY - 103}px`
    box.textContent = amount
    box.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`

    document.body.appendChild(box)
    amount++
    box.addEventListener('contextmenu', (e) => {
        document.body.removeChild(box)
        amount--
        e.preventDefault()
    })
    box.addEventListener("mousemove", (e) => {
        document.removeEventListener("click", createBox);
        if (move) {
            box.style.top = (e.clientY - 103) + "px"
            box.style.left = (e.clientX - 103) + "px"
        }
        box.addEventListener("mousedown", () => {
            move = true
        })
        box.addEventListener("mouseup", () => {
            move = false
        })
        // document.addEventListener('click', createBox)

        // cza dodac listenera po poruszeniu
    })

}

document.addEventListener('click', createBox)