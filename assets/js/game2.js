const GAME = [
    {
        question: 'The capital of Belgium',
        answers: [
            {
                id: '1',
                value: 'Brussels',
                correct: true,
            },
            {
                id: '2',
                value: 'Zagreb',
                correct: false,
            },
            {
                id: '3',
                value: 'Sofia',
                correct: false,
            },
            {
                id: '4',
                value: 'Tallinn',
                correct: false,
            }
        ]
    },
    {
        question: 'The capital of Croatia',
        answers: [
            {
                id: '5',
                value: 'Helsinki',
                correct: false,
            },
            {
                id: '6',
                value: 'Zagreb',
                correct: true,
            },
            {
                id: '7',
                value: 'Reykjavik',
                correct: false,
            },
            {
                id: '8',
                value: 'Bratislava',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of North Macedonia',
        answers: [
            {
                id: '9',
                value: 'Tallinn',
                correct: false,
            },
            {
                id: '10',
                value: 'Skopje',
                correct: true,
            },
            {
                id: '11',
                value: 'San Marino',
                correct: false,
            },
            {
                id: '12',
                value: 'Belgrade',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of Liechtenstein',
        answers: [
            {
                id: '13',
                value: 'Vaduz',
                correct: true,
            },
            {
                id: '14',
                value: 'Nicosia',
                correct: false,
            },
            {
                id: '15',
                value: 'Reykjavik',
                correct: false,
            },
            {
                id: '16',
                value: 'Kyiv ',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of France',
        answers: [
            {
                id: '17',
                value: 'Amsterdam',
                correct: false,
            },
            {
                id: '18',
                value: 'Riga',
                correct: false,
            },
            {
                id: '19',
                value: 'Paris',
                correct: true,
            },
            {
                id: '20',
                value: 'Sofia',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of Denmark',
        answers: [
            {
                id: '21',
                value: 'Belgrade',
                correct: false,
            },
            {
                id: '22',
                value: 'Copenhagen',
                correct: true,
            },
            {
                id: '23',
                value: 'London',
                correct: false,
            },
            {
                id: '24',
                value: 'Minsk',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of Romania',
        answers: [
            {
                id: '25',
                value: 'Belgrade',
                correct: false,
            },
            {
                id: '26',
                value: 'Bratislava',
                correct: false,
            },
            {
                id: '27',
                value: 'Sarajevo',
                correct: false,
            },
            {
                id: '28',
                value: 'Bucharest',
                correct: true,
            },
        ]
    },
    {
        question: 'The capital of Ukraine',
        answers: [
            {
                id: '29',
                value: 'Berlin',
                correct: false,
            },
            {
                id: '30',
                value: 'SkoTbilisipje',
                correct: false,
            },
            {
                id: '31',
                value: 'Kyiv ',
                correct: true,
            },
            {
                id: '32',
                value: 'Pristina',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of Poland',
        answers: [
            {
                id: '33',
                value: 'Warsaw',
                correct: true,
            },
            {
                id: '34',
                value: 'Madrid',
                correct: false,
            },
            {
                id: '35',
                value: 'Paris',
                correct: false,
            },
            {
                id: '36',
                value: 'Dublin',
                correct: false,
            },
        ]
    },
    {
        question: 'The capital of Germany',
        answers: [
            {
                id: '37',
                value: 'Lisbon',
                correct: false,
            },
            {
                id: '38',
                value: 'Berlin',
                correct: true,
            },
            {
                id: '39',
                value: 'Stockholm',
                correct: false,
            },
            {
                id: '40',
                value: 'Pristina',
                correct: false,
            },
        ]
    },
]

const game2 = document.querySelector('.game-2');
const questions = document.querySelector('.game-2__questions');
const result = document.querySelector('.game-2__results');
const text = document.querySelector('.game-2__text');
const question = document.querySelector('.game-2__question');
const answers = document.querySelector('.answers');
const indicator = document.querySelector('.game-2__indicator');
const nextBtn = document.querySelector('.next');
const restartBtn = document.querySelector('.restart');

let results = {}
let trueAnswer = 0
let createSnow

const randomQuestions = (index) => {

    randomIndicator(index + 1)

    questions.dataset.step = index

    const randomAnswers = () => {
        return GAME[index].answers.map((answer) => {
            return `
            <li class="answer-item">
            <label>
              <input class = "answer-input" type="radio" name= ${index} value = ${answer.value} step = ${answer.correct}>
              ${answer.value}
            </label>
          </li>
            `
        })
    };

    questions.innerHTML = `
    <div class="game-2__question-item">
        <div class="game-2__question">${GAME[index].question}</div>
        <ul class="answers">${randomAnswers()}</ul>
      </div>`
};

const randomIndicator = (number) => {
    indicator.innerHTML = `${number}/${GAME.length}`
};

game2.addEventListener('change', e => {
    if (e.target.classList.contains('answer-input')) {
        results[e.target.name] = e.target.value
        results[e.target.step] = e.target.step
        nextBtn.disabled = false
    }
    if (e.target.step === "true") {
        trueAnswer++
    }

})

game2.addEventListener('click', e => {
    if (e.target.classList.contains('next')) {
        nextBtn.disabled = true
        const nextQuestion = Number(questions.dataset.step) + 1

        if (nextQuestion === GAME.length) {
            nextBtn.style.display = 'none'
            restartBtn.style.display = 'block'
            questions.style.display = 'none'
            indicator.style.display = 'none'
            result.style.display = 'block'
            text.style.display = 'block'
            result.innerHTML = `${trueAnswer}/${GAME.length}`

            if (trueAnswer == 10) {
                text.innerHTML = `you are genius`
                text.style.color = 'green'
                game2.style.background = 'green'
            }
            else if (trueAnswer <= 4) {
                text.innerHTML = `go back to school`
                text.style.color = 'red'
                game2.style.background = 'red'
            }
            else {
                text.innerHTML = `not bad`
                text.style.color = 'rgb(255, 140, 1)'
                game2.style.background = 'rgb(255, 140, 1)'
            }
            // ---------------------------------------------------------
            createSnow = setInterval(() => {
                const snowFall = document.createElement('snow-item')
                snowFall.classList.add('snow')
                snowFall.textContent = '❄'
                document.body.append(snowFall)

                snowFall.style.left = Math.random() * window.innerWidth + 'px'
                snowFall.style.animationDuration = Math.random() * 5 + 3 + 's'
                snowFall.style.opacity = Math.random()

                setTimeout(() => {
                    snowFall.remove()
                }, 8000)
            }, 50);
            // -----------------------------------------------------------
        }
        else {
            randomQuestions(nextQuestion)
        }

    }
    if (e.target.classList.contains('restart')) {
        randomQuestions(0)
        clearInterval(createSnow)
        nextBtn.style.display = 'block'
        restartBtn.style.display = 'none'
        questions.style.display = 'block'
        indicator.style.display = 'block'
        result.style.display = 'none'
        text.style.display = 'none'
        game2.style.background = 'linear-gradient(315deg,rgb(95, 95, 233), rgb(239, 96, 96), rgb(228, 228, 112))'
    }

})

randomQuestions(0)

// ------------------------------------------------------