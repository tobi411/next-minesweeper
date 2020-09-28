import config, { IConfig } from "../config/config";
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
    private minePositions: Position[];

    constructor(difficulty: IConfig) {
        this.difficulty = difficulty;
        this.cells = [];
        this.minePositions = this.generateMinePositions(difficulty.bombNum, difficulty.boardWidth, difficulty.boardHeight);
        this.initializeBoard();
    }

    initializeBoard() {
        this.placeEmptyCells();
        this.placeMines(this.minePositions);
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

    getNumMines() {
        return this.minePositions.length;
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

    toggleFlag(position: Position, isFlagged: boolean) {
        let cell = this.getCell(position);
        cell.setIsFlagged(isFlagged);
    }

    generateMinePositions(numMines: number, boardWidth: number, boardHeight: number): Position[] {
        let mines: Position[] = []
        let mineMap = {}
        let maxNumColumns = boardWidth * boardHeight;

        for (let i = 0; (i < numMines) && (i < maxNumColumns); i++) {
            let x = Math.floor(Math.random() * boardWidth);
            let y = Math.floor(Math.random() * boardHeight);

            //Ensure only one mine is place at a position
            if (!mineMap[`${x}_${y}`]) {
                mineMap[`${x}_${y}`] = true;
                mines.push(new Position(x, y));
            } else {
                numMines += 1;
            }
        }

        return mines;
    }

    placeMines(minePositions: Position[]) {
        let numPositions = minePositions.length;

        for (let i = 0; i < numPositions; i++) {
            let mine = new MineCell(new BoardCell(minePositions[i]));
            // mine.setIsHidden(false);
            this.cells[minePositions[i].y][minePositions[i].x] = mine;
        }
    }

    replaceMine(from: Position, to: Position) {
        this.placeMines([to]);
        let newCell = new BoardCell(from);
        this.cells[from.y][from.x] = newCell;
    }


    placeHintCell(position: Position, value: string) {
        if (this.isWithinBoard(position)) {
            let hint = new HintCell(new BoardCell(position), value);
            hint.setIsHidden(false);
            this.cells[position.y][position.x] = hint;
        }
    }

    openAdjacentEmptyCells(position: Position) {

        if (this.getCell(position).getType() !== CellContentType.EMPTY) {
            return;
        }

        let pN = new Position(position.x, position.y).getAdjNorthPosition();
        this.recurAlongDirection(pN);

        let pNE = new Position(position.x, position.y).getAdjNorthEastPosition();
        this.recurAlongDirection(pNE);

        let pE = new Position(position.x, position.y).getAdjEastPosition();
        this.recurAlongDirection(pE);

        let pSE = new Position(position.x, position.y).getAdjSouthEastPosition();
        this.recurAlongDirection(pSE);

        let pS = new Position(position.x, position.y).getAdjSouthPosition();
        this.recurAlongDirection(pS);

        let pSW = new Position(position.x, position.y).getAdjSouthWestPosition();
        this.recurAlongDirection(pSW);

        let pW = new Position(position.x, position.y).getAdjWestPosition();
        this.recurAlongDirection(pW);

        let pNW = new Position(position.x, position.y).getAdjNorthWestPosition();
        this.recurAlongDirection(pNW);
    }

    openEmptyCellsAlongDirection(position: Position) {
        let p = new Position(position.x, position.y);
        this.openCell(p);
        let numAdjacentMines = this.countAdjacentMines(p);
        if (numAdjacentMines > 0) {
            this.placeHintCell(p, numAdjacentMines.toString());
        }
    }

    recurAlongDirection(position: Position) {
        if (this.isWithinBoard(position) &&
            (this.getCell(position).getIsHidden()) &&
            !(this.getCell(position).getIsFlagged())) {
            this.openEmptyCellsAlongDirection(position);
            this.openAdjacentEmptyCells(position);
        }
    }

    isMineCell(position: Position): boolean {
        let cell = this.getCell(position);
        return cell.getType() === CellContentType.MINE;
    }

    openCell(position: Position) {
        if (this.isWithinBoard(position)) {
            let cell = this.getCell(position);
            cell.setIsHidden(false);
        }
    }

    explodeCell(position: Position) {
        if (this.isWithinBoard(position)) {
            let cell = this.getCell(position);
            cell.explode();
        }
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
        */

        //----------- Check North Neighbour ------------ 
        let adjNorthPosition = position.getAdjNorthPosition()
        if (this.isWithinBoard(adjNorthPosition)) {
            if (this.isMineCell(adjNorthPosition)) {
                count++;
            }
        }

        //-----------  Check North-East Neighbour ------------ 
        let adjNorthEastPosition = position.getAdjNorthEastPosition();
        if (this.isWithinBoard(adjNorthEastPosition)) {
            if (this.isMineCell(adjNorthEastPosition)) {
                count++;
            }
        }

        //----------- Check East Neighbour ------------ 
        let adjEastPosition = position.getAdjEastPosition()
        if (this.isWithinBoard(adjEastPosition)) {
            if (this.isMineCell(adjEastPosition)) {
                count++;
            }
        }

        //----------- Check South-East ------------ 
        let adjSouthEastPosition = position.getAdjSouthEastPosition();
        if (this.isWithinBoard(adjSouthEastPosition)) {
            if (this.isMineCell(adjSouthEastPosition)) {
                count++;
            }
        }

        //-----------  Check South ------------ 
        let adjSouthPosition = position.getAdjSouthPosition();
        if (this.isWithinBoard(adjSouthPosition)) {
            if (this.isMineCell(adjSouthPosition)) {
                count++;
            }
        }

        //----------- Check South-West ------------- 
        let adjSouthWestPosition = position.getAdjSouthWestPosition();
        // Only process this cell if this is a valid one 
        if (this.isWithinBoard(adjSouthWestPosition)) {
            if (this.isMineCell(adjSouthWestPosition)) {
                count++;
            }
        }

        //----------- Check West ------------ 
        let adjWestPosition = position.getAdjWestPosition();
        if (this.isWithinBoard(adjWestPosition)) {
            if (this.isMineCell(adjWestPosition)) {
                count++;
            }
        }

        //----------- Check North-West ------------ 
        let adjNorthWestPosition = position.getAdjNorthWestPosition();
        if (this.isWithinBoard(adjNorthWestPosition)) {
            if (this.isMineCell(adjNorthWestPosition)) {
                count++;
            }
        }

        return (count);
    }

    getNumFlaggedMines(): number {
        let numMinePositions = this.minePositions.length;
        let numFlaggedMines = 0;

        for (let i = 0; i < numMinePositions; i++) {
            let cell = this.getCell(this.minePositions[i]);
            if (cell.getIsFlagged()) {
                numFlaggedMines++;
            }
        }

        return numFlaggedMines;
    }

    getNumOpenedCells(): number {
        let numOpenedCells = 0;
        let boardWidth = this.getBoardWidth();
        let boardHeight = this.getBoardHeight();

        for (let i = 0; i < boardHeight; i++) {
            for (let j = 0; j < boardWidth; j++) {
                let position = new Position(j, i);
                let cell = this.getCell(position);
                if (cell.getType() !== CellContentType.MINE && !cell.getIsHidden()) {
                    numOpenedCells++;
                }
            }
        }

        return numOpenedCells;
    }

    showMineCells() {
        let numMinePositions = this.minePositions.length;

        for (let i = 0; i < numMinePositions; i++) {
            this.openCell(this.minePositions[i])
        }
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
            cells: currCells
        }

        return gameState;
    }
}

export default GameBoard