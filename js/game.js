class Game {
    constructor() {
        this.activePlayer = 0
        this.winner = 9
        this.turnCount = 0
        this.winnerFound = false
        this.continueGame = true
        this.cells = [[9, 9, 9], [9, 9, 9], [9, 9, 9]]
        this.downDiagonal = [9, 9, 9]
        this.upDiagonal = [9, 9, 9]
    }
    resetBoard() {
        this.activePlayer = 0
        this.winner = 9
        this.turnCount = 0
        this.winnerFound = false
        this.continueGame = true
        this.cells = [[9, 9, 9], [9, 9, 9], [9, 9, 9]]
        this.downDiagonal = [9, 9, 9]
        this.upDiagonal = [9, 9, 9]
    }
    fillSquare(row, column) {
        if (cells[row][column] !== 9) {
            cell[row][column] = this.activePlayer
            if (row === column) {
                this.downDiagonal[row] === this.activePlayer
            }
            else if (row + column === 2) {
                this.upDiagonal[column] = this.activePlayer
            }
            this.turnCount += 1
            this.winnerCheck()
            this.drawCheck()
            this.activePlayer = this.activePlayer === 0 ? 1 : 0
        }
    }
    winnerCheck(row, column) {
        let rowCheck = this.cells[row].reduce((sum, num) => { return sum + num })
        let columnCheck = cells[0][column] + cells[1][column] + cells[2][column]
        let downDiagCheck = this.downDiagonal.reduce((sum, num) => { return sum + num })
        let upDiagCheck = this.upDiagonal.reduce((sum, num) => { return sum + num })

        if (rowCheck === 0 || rowCheck === 3 || columnCheck === 0 || columnCheck === 3) {
            this.gameWon()
        }
        else if (downDiagCheck === 0 || downDiagCheck === 3 || upDiagCheck === 0 || upDiagCheck === 3) {
            this.gameWon()
        }
    }
    gameWon() {
        this.winner = this.activePlayer
        this.winnerFound = true
        this.continueGame = false
    }
    drawCheck() {
        this.continueGame = this.turnCount === 9 ? false : true
    }
}