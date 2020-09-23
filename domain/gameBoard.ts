import Level from "./level";
import Position from "../types/position"
import BoardCell from "./gameCell";
import MineCell from "./decorators/mineCell";
import CellContentType from '../types/cellContentType';
import ICell from '../types/cell';

class GameBoard {

    private difficulty: Level;
    private cells: ICell[][];

    constructor(difficulty: Level) {
        this.difficulty = difficulty;
        this.cells = [];
    }

    initializeBoard() {
        this.placeEmptyCells();
    }

    isWithinBoard(position: Position): boolean {
        let boardLength = this.difficulty.getNumSideCells();

        return (position.x >= 0 && position.x < boardLength)
            && (position.y >= 0 && position.y < boardLength);
    }

    getCells() {
        return this.cells;
    }
    
    getCell(position: Position): ICell {
        return this.cells[position.y][position.x];
    }

    placeMines(positions: Position[]) {
        console.log(positions);
        let numPositions = positions.length;

        let boardLength = this.difficulty.getNumSideCells();

        for (let i = 0; i < boardLength; i++) {
            for (let j = 0; j < boardLength;) {
                let mine = new MineCell(new BoardCell(positions[i]));
                this.cells[positions[i].x][positions[i].y] = mine;
            }
        }
    }
    
    placeHintCell() {
        
    }
    
    placeEmptyCells() {
        let boardLength = this.difficulty.getNumSideCells();
    
        for (let i = 0; i < boardLength; i++) {
            this.cells[i] = [];
            for (let j = 0; j < boardLength; j++) {
                let position = new Position(j, i);
                let emptyCell = new BoardCell(position);
                this.cells[i].push(emptyCell)
            }
        }
    }

    isMine(position: Position): boolean {
        let cell = this.getCell(position);
        return cell.getType() === CellContentType.MINE;
    }

    countAdjacentMines(position: Position): number {
        let i: number;
        let count: number = 0;

        /* 
            Count all the mines in the 8 adjacent 
            cells 
      
                N.W   N   N.E 
                  \   |   / 
                   \  |  / 
                W----Cell----E 
                     / | \ 
                   /   |  \ 
                S.W    S   S.E 
      
            Cell-->Current Cell (row, col) 
            N -->  North        (row-1, col) 
            S -->  South        (row+1, col) 
            E -->  East         (row, col+1) 
            W -->  West            (row, col-1) 
            N.E--> North-East   (row-1, col+1) 
            N.W--> North-West   (row-1, col-1) 
            S.E--> South-East   (row+1, col+1) 
            S.W--> South-West   (row+1, col-1) 
        */

        //----------- Check North Neighbour ------------ 
        let adjNorthPosition = position.getAdjNorthPosition()
        if (this.isWithinBoard(adjNorthPosition)) {
            if (this.isMine(adjNorthPosition)) {
                count++;
            }
        }

        //-----------  Check North-East Neighbour ------------ 
        let adjNorthEastPosition = position.getAdjNorthEastPosition();
        if (this.isWithinBoard(adjNorthEastPosition)) {
            if (this.isMine(adjNorthEastPosition)) {
                count++;
            }
        }

        //----------- Check East Neighbour ------------ 
        let adjEastPosition = position.getAdjEastPosition()
        if (this.isWithinBoard(adjEastPosition)) {
            if (this.isMine(adjEastPosition)) {
                count++;
            }
        }

        //----------- Check South-East ------------ 
        let adjSouthEastPosition = position.getAdjSouthEastPosition();
        if (this.isWithinBoard(adjSouthEastPosition)) {
            if (this.isMine(adjSouthEastPosition)) {
                count++;
            }
        }

        //-----------  Check South ------------ 
        let adjSouthPosition = position.getAdjSouthPosition();
        if (this.isWithinBoard(adjSouthPosition)) {
            if (this.isMine(adjSouthPosition)) {
                count++;
            }
        }

        //----------- Check South-West ------------- 
        let adjSouthWestPosition = position.getAdjSouthWestPosition();
        // Only process this cell if this is a valid one 
        if (this.isWithinBoard(adjSouthWestPosition)) {
            if (this.isMine(adjSouthWestPosition)) {
                count++;
            }
        }

        //----------- Check West ------------ 
        let adjWestPosition = position.getAdjWestPosition();
        if (this.isWithinBoard(adjWestPosition)) {
            if (this.isMine(adjWestPosition)) {
                count++;
            }
        }

        //----------- Check North-West ------------ 
        let adjNorthWestPosition = position.getAdjNorthWestPosition();
        if (this.isWithinBoard(adjNorthWestPosition)) {
            if (this.isMine(adjNorthWestPosition)) {
                count++;
            }
        }

        return (count);
    }

    printToJSON() {
        let boardLength = this.difficulty.getNumSideCells();
        for (let i = 0; i < boardLength; i++) {
            for (let j = 0; j < boardLength; j++) {

            }
        }
    }
}

export default GameBoard