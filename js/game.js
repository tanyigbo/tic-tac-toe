class Game {
    constructor() {
        this.activePlayer = 0
        this.winner = 9
        this.turnCount = 0
        this.winnerFound = false
        this.endGame = false
        this.cells = [[9, 9, 9], [9, 9, 9], [9, 9, 9]]
        this.downDiagonal = [9, 9, 9]
        this.upDiagonal = [9, 9, 9]
    }
    resetBoard() {
        this.activePlayer = 0
        this.winner = 9
        this.turnCount = 0
        this.winnerFound = false
        this.endGame = false
        this.cells = [[9, 9, 9], [9, 9, 9], [9, 9, 9]]
        this.downDiagonal = [9, 9, 9]
        this.upDiagonal = [9, 9, 9]
    }
    fillSquare(row, column) {
        if (this.cells[row][column] === 9) {
            this.cells[row][column] = this.activePlayer
            if (row === column) {
                this.downDiagonal[row] = this.activePlayer
            }
            if (row + column == 2) {
                this.upDiagonal[column] = this.activePlayer
            }
            this.turnCount += 1
            this.winnerCheck(row, column)
            this.drawCheck()
            this.activePlayer = this.activePlayer === 0 ? 1 : 0
        }
    }
    winnerCheck(row, column) {
        let rowCheck = this.cells[row].reduce((sum, num) => { return sum + num })
        let columnCheck = this.cells[0][column] + this.cells[1][column] + this.cells[2][column]
        let downDiagCheck = this.downDiagonal.reduce((sum, num) => { return sum + num })
        let upDiagCheck = this.upDiagonal.reduce((sum, num) => { return sum + num })

        for (let element of this.cells) {
            console.log(element)
        }

        console.log(rowCheck, columnCheck, downDiagCheck, upDiagCheck)
        if (rowCheck === 0 || rowCheck === 3 || columnCheck === 0 || columnCheck === 3) {
            console.log('Called Endgame')
            this.gameWon()
        }
        else if (downDiagCheck === 0 || downDiagCheck === 3 || upDiagCheck === 0 || upDiagCheck === 3) {
            console.log('Called Endgame')
            this.gameWon()
        }
    }
    gameWon() {
        this.winner = this.activePlayer
        this.winnerFound = true
        this.endGame = true

        console.log(`Game status Winner:${this.winner} Winner Found:${this.winnerFound} End Game:${this.endGame} Turn Count:${this.turnCount}`)
    }
    drawCheck() {
        if (!this.endGame) {
            this.endGame = this.turnCount === 9 ? true : false
        }
    }
}