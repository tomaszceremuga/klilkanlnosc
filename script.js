let amount = 0
const body = document.querySelector('body')
const deleteBtn = document.querySelector('.clear-button')

class Box {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    createBox() {
        const boxElement = document.createElement("div")

        boxElement.setAttribute('class', 'box')
        boxElement.style.left = this.x
        boxElement.style.top = this.y
        boxElement.textContent = amount
        boxElement.style.background = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`

        document.body.appendChild(boxElement)
        amount++
        boxElement.addEventListener('contextmenu', (e) => {
            document.body.removeChild(boxElement)
            amount--
            e.preventDefault()
        })

    }

}

const createNewBox = (e) => {
    const newBox = new Box(`${e.pageX - 103}px`, `${e.pageY - 103}px`)
    newBox.createBox()
}

deleteBtn.addEventListener('click', () => {
    window.location.reload()
})
deleteBtn.addEventListener('contextmenu', () => {
    window.location.reload()
    e.preventDefault()
})
document.addEventListener('click', createNewBox)