import Level from "./../domain/level";
import Position from "./../types/position"
import BoardCell from "./boardCell";

class Board {

    private difficulty: Level;
    private cells: BoardCell[][];

    constructor(difficulty: Level,) {
        this.difficulty = difficulty;
    }

    isWithinBoard(cell: BoardCell): boolean {
        let boardLength = this.difficulty.getNumSideCells();
        let cellPosition = cell.getPosition();

        return (cellPosition.x >= 0 && cellPosition.x < boardLength)
            && (cellPosition.y >= 0 && cellPosition.y < boardLength);
    }

    getCell(position: Position): BoardCell {
        return this.cells[position.y][position.x];
    }
}

export default Board