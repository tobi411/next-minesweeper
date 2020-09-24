import config, { IConfig } from "./../config";
import Position from "./position"
import BoardCell from "./gameCell";
import MineCell from "./decorators/mineCell";
import HintCell from "./decorators/hintCell";
import CellContentType from '../types/cellContentType';
import ICell from '../types/cell';
import { IGameBoardState } from '../types/game';
import { ICellProps } from './../types/cell';

class GameBoard {

    private difficulty: IConfig;
    private cells: ICell[][];
    private lastUpdated: Date;

    constructor(difficulty: IConfig) {
        this.difficulty = difficulty;
        this.cells = [];
        this.initializeBoard();
    }

    initializeBoard() {
        this.placeEmptyCells();
    }

    isWithinBoard(position: Position): boolean {
        let boardWidth = this.getBoardWidth();
        let boardHeight = this.getBoardHeight();

        return (position.x >= 0 && position.x < boardWidth)
            && (position.y >= 0 && position.y < boardHeight);
    }

    getBoardWidth(): number {
        return this.difficulty.boardWidth;
    }

    getBoardHeight(): number {
        return this.difficulty.boardHeight;
    }

    getCells() {
        return this.cells;
    }

    getCell(position: Position): ICell {
        return this.cells[position.y][position.x];
    }

    placeEmptyCells() {
        let boardWidth = this.getBoardWidth();
        let boardHeight = this.getBoardHeight();

        for (let i = 0; i < boardHeight; i++) {
            this.cells[i] = [];
            for (let j = 0; j < boardWidth; j++) {
                let position = new Position(j, i);
                let emptyCell = new BoardCell(position);
                this.cells[i].push(emptyCell)
            }
        }
    }

    placeMines(positions: Position[]) {
        let numPositions = positions.length;

        for (let i = 0; i < numPositions; i++) {
            let mine = new MineCell(new BoardCell(positions[i]));
            this.cells[positions[i].y][positions[i].x] = mine;
        }
    }

    placeHintCell(position: Position, value: string) {
        if (this.isWithinBoard(position)) {
            let hint = new HintCell(new BoardCell(position), value);
            this.cells[position.y][position.x] = hint;
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

    printState(): IGameBoardState {
        let boardHeight = this.getBoardHeight();
        let boardWidth = this.getBoardWidth();
        let currCells: ICellProps[][] = [];
        
        for (let i = 0; i < boardHeight; i++) {
            currCells[i] = [];
            for (let j = 0; j < boardWidth; j++) {
                let currCell = this.cells[i][j];
                currCells[i].push(currCell.printState())
            }
        }

        let gameState = {
            lastUpdated: new Date(),
            cells: currCells
        }

        return gameState;
    }
}

export default GameBoard