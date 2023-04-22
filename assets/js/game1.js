const cards = document.querySelectorAll('.game__card');
const endGame= document.querySelector('.game-over');

let flippedCard = false
let cardsLock = false
let firstCard, secondCard
let count = 0

function flip() {
    if(cardsLock) return
    if(this === firstCard) return

    this.classList.add('flip')

    if(!flippedCard){
        flippedCard = true
        firstCard = this
        return
    }
    
    secondCard = this
    // flippedCard = false
    cardsLock = true

    checkMatch()
};

const checkMatch = () => {
    if(firstCard.dataset.card === secondCard.dataset.card){
        cardsMatch()
        gameOver()
        return
    }
    cardsNoMatch()
};

const cardsMatch = () => {
    firstCard.removeEventListener('click', flip)
    secondCard.removeEventListener('click', flip)

    cardsReset()
    count++
};

const gameOver = () => {
    if(count === 6){
        endGame.style.display = 'block'
    }
};

const cardsNoMatch = () => {
    cardsLock = true

    setTimeout( () => {
        firstCard.classList.remove('flip')
        secondCard.classList.remove('flip')

        // cardsLock = false
        cardsReset()
    },1000)
};

const cardsReset = () => {
    flippedCard = false
    cardsLock = false
    firstCard = null
    secondCard = null
};

(function cardsRandom() {
    cards.forEach(card => {
        let random = Math.floor(Math.random()*6)
        card.style.order= random
    });
})()

cards.forEach(card => card.addEventListener('click', flip))