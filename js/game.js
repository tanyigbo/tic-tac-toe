class Game {
    constructor() {
        this.activePlayer = 0
        this.winner = 9
        this.turnCount = 0
        this.winnerFound = false
        this.gameEnded = false
        this.cells = [[9, 9, 9], [9, 9, 9], [9, 9, 9]]
        this.downDiagonal = [9, 9, 9]
        this.upDiagonal = [9, 9, 9]
    }
    resetBoard() {
        this.activePlayer = 0
        this.winner = 9
        this.turnCount = 0
        this.winnerFound = false
        this.gameEnded = false
        this.cells = [[9, 9, 9], [9, 9, 9], [9, 9, 9]]
        this.downDiagonal = [9, 9, 9]
        this.upDiagonal = [9, 9, 9]
    }

    fillSquare(row, column) {
        //Check if cell has already been filled (seperation of logic from implementation)
        if (this.cells[row][column] === 9) {
            this.cells[row][column] = this.activePlayer

            //Checks if cell is in down-diagonal 
            if (row === column) {
                this.downDiagonal[row] = this.activePlayer
            }
            //Checks if cell is in up-diagonal 
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
        //Player 0 wins with sum of 0
        //Player 1 wins with sum of 3
        let rowCheck = this.cells[row].reduce((sum, num) => { return sum + num })
        let columnCheck = this.cells[0][column] + this.cells[1][column] + this.cells[2][column]
        let downDiagCheck = this.downDiagonal.reduce((sum, num) => { return sum + num })
        let upDiagCheck = this.upDiagonal.reduce((sum, num) => { return sum + num })

        if (rowCheck === 0 || rowCheck === 3 || columnCheck === 0 || columnCheck === 3) {
            this.playerWinsGame()
        }
        else if (downDiagCheck === 0 || downDiagCheck === 3 || upDiagCheck === 0 || upDiagCheck === 3) {
            this.playerWinsGame()
        }
    }

    playerWinsGame() {
        this.winner = this.activePlayer
        this.winnerFound = true
        this.gameEnded = true
    }

    drawCheck() {
        //Ends game at 9 turns if not already ended by player win
        if (!this.gameEnded) {
            this.gameEnded = this.turnCount === 9 ? true : false
        }
    }
}