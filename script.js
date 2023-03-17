let amount = 0
const body = document.querySelector('body')



document.addEventListener('click', (e) => {

    const box = document.createElement("div")
    box.setAttribute('class', 'box')
    box.style.left = `${e.pageX - 103}px`
    box.style.top = `${e.pageY - 103}px`
    box.textContent = amount
    document.body.appendChild(box)
    amount++
    box.addEventListener('contextmenu', (e) => {
        document.body.removeChild(box)
        amount--
        e.preventDefault()
    })

})