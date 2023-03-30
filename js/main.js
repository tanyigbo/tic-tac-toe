function updateSquare(game, event) {
    event.preventDefault()
    const cell = event.target
    if (cell.dataset.status === 'E') {
        cell.setAttribute('data-status', 'F')
        cell.innerText = `${game.activePlayer}`
        game.fillSquare(Number(cell.dataset.row), Number(cell.dataset.column))
        endGameCheck(game)
    }
}

function endGameCheck(activeGame) {
    console.log(`Starting turn ${activeGame.turnCount}`)
    console.log(`Game should end: ${activeGame.endGame}`)
    if (activeGame.endGame) {
        console.log("Game Ended")
        displayWinner()
    }
}

//Incomplete
function displayWinner() {

}


const startBtn = document.querySelector('#start-btn')
const xSymbol = document.querySelector('#x-sym')
const oSymbol = document.querySelector('#y-sym')
const winDisplay = document.querySelector('#win-banner')
const board = document.querySelector('.board-grid')

const grid00 = document.querySelector('#g00')
const grid01 = document.querySelector('#g01')
const grid02 = document.querySelector('#g02')
const grid10 = document.querySelector('#g10')
const grid11 = document.querySelector('#g11')
const grid12 = document.querySelector('#g12')
const grid20 = document.querySelector('#g20')
const grid21 = document.querySelector('#g21')
const grid22 = document.querySelector('#g22')


startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    game.resetBoard()
    grid00.setAttribute('data-status', 'E')
    grid01.setAttribute('data-status', 'E')
    grid02.setAttribute('data-status', 'E')
    grid10.setAttribute('data-status', 'E')
    grid11.setAttribute('data-status', 'E')
    grid12.setAttribute('data-status', 'E')
    grid20.setAttribute('data-status', 'E')
    grid21.setAttribute('data-status', 'E')
    grid22.setAttribute('data-status', 'E')
    grid00.innerText = ''
    grid01.innerText = ''
    grid02.innerText = ''
    grid10.innerText = ''
    grid11.innerText = ''
    grid12.innerText = ''
    grid20.innerText = ''
    grid21.innerText = ''
    grid22.innerText = ''
})

const game = new Game()
grid00.addEventListener('click', (event) => {
    if (!game.endGame) {
        updateSquare(game, event)
    }
})
grid01.addEventListener('click', (event) => { updateSquare(game, event) })
grid02.addEventListener('click', (event) => { updateSquare(game, event) })
grid10.addEventListener('click', (event) => { updateSquare(game, event) })
grid11.addEventListener('click', (event) => { updateSquare(game, event) })
grid12.addEventListener('click', (event) => { updateSquare(game, event) })
grid20.addEventListener('click', (event) => { updateSquare(game, event) })
grid21.addEventListener('click', (event) => { updateSquare(game, event) })
grid22.addEventListener('click', (event) => { updateSquare(game, event) })