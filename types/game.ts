import { ICellProps } from "./cell";

export interface IGameBoardState {
    // lastUpdated: Date,
    cells: ICellProps[][]
} 

export interface IGameState{
    name: string,
    gameOver: boolean,
    difficulty: string,
    timer: number,
    numFlagged: number,
    numMoves: number,
    gameBoard: IGameBoardState 
}
