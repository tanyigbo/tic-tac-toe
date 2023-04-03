function displayOnMouseOver(game, event) {
    event.preventDefault()
    const cell = event.target
    if (cell.dataset.status === 'E') {
        cell.style.color = 'yellow'
        cell.innerText = `${players[game.activePlayer]}`
    }
}

function removeOnMouseLeave(event) {
    event.preventDefault()
    const cell = event.target
    if (cell.dataset.status === 'E') {
        cell.innerText = ``
    }
}

function updateSquare(game, event) {
    event.preventDefault()
    const invalidMoveSound = document.querySelector('#invalid-move-sound')
    const cell = event.target
    if (cell.dataset.status === 'E') {
        playerSounds[game.activePlayer].play()
        cell.style.color = 'whitesmoke'
        cell.setAttribute('data-status', 'F')
        cell.innerText = `${players[game.activePlayer]}`

        game.fillSquare(Number(cell.dataset.row), Number(cell.dataset.column))
        endGameCheck(game)
    }
    else {
        invalidMoveSound.play()
    }
}

function endGameCheck(activeGame) {
    const drawSound = document.querySelector('#draw-sound')
    const winSound = document.querySelector('#win-sound')
    if (activeGame.gameEnded) {
        const winnerID = game.winner
        if (winnerID < 2) {
            gameStatus.innerText = `${players[winnerID]} Wins!`
            winSound.play()
        }
        else {
            gameStatus.innerText = 'Draw'
        }
    }
    else {
        gameStatus.innerText = `Player ${players[game.activePlayer]} Turn`
    }
}

const startBtn = document.querySelector('#start-btn')
const gameStatus = document.querySelector('#game-status')
const board = document.querySelectorAll('.board-grid')
const players = ['X', 'O']
const game = new Game()

const playerSounds = [document.querySelector('#x-sound'), document.querySelector('#o-sound')]
const newGameSound = document.querySelector('#new-game-sound')





// Reset board and game on button click
startBtn.addEventListener('click', (event) => {
    event.preventDefault()
    game.resetBoard()
    gameStatus.innerText = 'Player X Turn'
    for (square of board) {
        square.setAttribute('data-status', 'E')
        square.innerText = ''
    }
    newGameSound.play()
})

// Adds eventlisteners to all squares
for (square of board) {
    // Adding marker on click
    square.addEventListener('click', (event) => {
        if (!game.gameEnded) {
            updateSquare(game, event)
        }
    })
    // Showing possible move on hover over
    square.addEventListener('mouseover', (event) => {
        if (!game.gameEnded) {
            displayOnMouseOver(game, event)
        }
    })
    // Remove possible move on mouse leave
    square.addEventListener('mouseleave', (event) => {
        if (!game.gameEnded) {
            removeOnMouseLeave(event)
        }
    })
}