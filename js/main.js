function updateSquare(game, event) {
    event.preventDefault()
    const cell = event.target
    if (cell.dataset.status === 'E') {
        cell.setAttribute('data-status', 'F')
        cell.innerText = `${players[game.activePlayer]}`
        game.fillSquare(Number(cell.dataset.row), Number(cell.dataset.column))
        endGameCheck(game)
    }
}

function endGameCheck(activeGame) {
    if (activeGame.gameEnded) {
        const winnerID = game.winner
        gameStatus.innerText = winnerID < 2 ? `${players[winnerID]} Wins!` : 'Draw'
    }
    else {
        gameStatus.innerText = `Player ${players[game.activePlayer]} Turn`
    }
}

const startBtn = document.querySelector('#start-btn')
const gameStatus = document.querySelector('#game-status')
const board = document.querySelectorAll('.board-grid')
const playerSym = [document.querySelector('#x-sym'), document.querySelector('#y-sym')]
const players = ['X', 'O']
const game = new Game()

startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    game.resetBoard()
    gameStatus.innerText = 'Player X Turn'
    for (square of board) {
        square.setAttribute('data-status', 'E')
        square.innerText = ''
    }
})

for (square of board) {
    square.addEventListener('click', (event) => {
        if (!game.gameEnded) {
            updateSquare(game, event)
        }
    })
}