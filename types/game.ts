import { ICellProps } from "./cell";

export interface IGameBoardState {
    cells: ICellProps[][]
} 

export interface IGameState{
    name: string,
    gameOver: boolean,
    gameWon: boolean,
    difficulty: string,
    timer: number,
    numFlagged: number,
    numMoves: number,
    gameBoard: IGameBoardState | null 
}

