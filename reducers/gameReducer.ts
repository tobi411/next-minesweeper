import { actionTypes } from './../actions/gameActions'
import { defaultLevel } from "./../config";
import { IGameState } from "./../types/game";

const initialState: IGameState = {
    name: "Tobi Kehinde",
    gameOver: false,
    gameWon: false,
    difficulty: defaultLevel,
    timer: 0,
    numFlagged: 0,
    numMoves: 0,
    gameBoard: null,
}

function gameReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SET_NAME:
            return { ...state, ...{ name: action.name } }

        case actionTypes.SET_GAME_OVER:
            return { ...state, ...{ gameOver: action.gameOver } }

        case actionTypes.SET_GAME_WON:
            return { ...state, ...{ gameWon: action.gameWon } }

        case actionTypes.SET_DIFFICULTY:
            return { ...state, ...{ difficulty: action.difficulty } }

        case actionTypes.TICK_TIMER:
            return { ...state, ...{ timer: action.time } }

        case actionTypes.SET_NUM_FLAGGED:
            return { ...state, ...{ numFlagged: action.numFlagged } }

        case actionTypes.UPDATE_BOARD:
            return { ...state, ...{ gameBoard: action.gameBoard } }

        case actionTypes.SET_NUM_MOVES:
            return { ...state, ...{ numMoves: action.numMoves } }

        default:
            return state
    }
}

export default gameReducer 