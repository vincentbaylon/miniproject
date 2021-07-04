function renderCard(card) {
    let li = document.createElement('li')
    let h2House = document.createElement('h2')
    let img = document.createElement('img')
    let pQuote = document.createElement('p')

    li.className = 'card'
    h2House.textContent = card.house
    img.src = card.image_url
    pQuote.textContent = `"${card.quote}"`
    li.id = 'renderedCard'

    li.append(img, h2House, pQuote)
    document.querySelector('#sort-list').append(li)
}

function renderSortCard(card) {
    let li = document.createElement('li')
    let img = document.createElement('img')
    let pQuote = document.createElement('p')

    li.className = 'card'
    img.src = card.image_url
    pQuote.textContent = `"${card.quote}"`
    li.id = 'renderedCard'

    li.append(img, pQuote)
    document.querySelector('#sort-list').append(li)
}

function removeCard() {
    let grabCard = document.querySelector('#renderedCard')
    grabCard.remove()
}

document.querySelector('#input-form').addEventListener('submit', (e) => {
    e.preventDefault()
    
    let input = document.querySelector('#inputName')
    let form = document.querySelector('#input-form')

    function grabRandom() {
        let houseArray = ['Gryffindor', 'Ravenclaw', 'Slytherin', 'Hufflepuff']
        return houseArray[Math.floor(Math.random() * houseArray.length)]
    }

    if (input.value.length == 0) {

    } else {
        form.reset()
        let randomCard = grabRandom()
        renderCard(cards[randomCard])
    }

})

document.querySelector('#submitButton').addEventListener('click', (e) => {
    let input = document.querySelector('#inputName')
    if (input.value.length == 0) {
        alert('What is your name?')
    } else {
        removeCard()
    }
})

// Initial Render
function initialRender() {
    renderSortCard(sortCard)
}

initialRender()