import { actionTypes } from './../actions/gameActions'
import { defaultLevel } from "./../config";
import { IGameState } from "./../types/game";
import GameSingleton from "./../gameSingleton";

let gameBoard = GameSingleton.getGame();

const initialState: IGameState = {
    name: "Tobi Kehinde",
    gameOver: false,
    difficulty: defaultLevel,
    timer: 0,
    flaggedNum: 0,
    numMoves: 0,
    gameBoard: gameBoard.printState()
}

function gameReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SET_NAME:
            return { ...state, ...{ name: action.name } }

        case actionTypes.SET_GAME_OVER:
            return { ...state, ...{ gameOver: action.gameOver } }

        case actionTypes.SET_DIFFICULTY:
            return { ...state, ...{ difficulty: action.difficulty } }

        case actionTypes.TICK_TIMER:
            return { ...state, ...{ timer: action.time } }

        case actionTypes.SET_FLAGGED_NUM:
            return { ...state, ...{ flaggedNum: action.flaggedNum } }

        case actionTypes.UPDATE_BOARD:
            return { ...state, ...{ gameBoard: action.gameBoard } }

        case actionTypes.INCREMENT_NUM_MOVES:
            return { ...state, ...{ numMoves: state.numMoves + 1 } }

        default:
            return state
    }
}

export default gameReducer 