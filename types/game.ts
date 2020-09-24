import { ICellProps } from "./cell";

export interface IGameBoardState {
    lastUpdated: Date,
    cells: ICellProps[][]
} 

export interface IGameState{
    name: string,
    gameOver: boolean,
    difficulty: string,
    timer: number,
    flaggedNum: number,
    gameBoard: IGameBoardState 
}

