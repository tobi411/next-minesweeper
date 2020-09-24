import { actionTypes } from './../actions/gameActions'
import config from "./../config";
import { IGameState } from "./../types/game";
import GameBoard from "./../domain/gameBoard";

let initialDifficulty = 'hard';

const initialState: IGameState = {
    name: "Tobi Kehinde",
    gameOver: false,
    difficulty: initialDifficulty,
    timer: 0,
    flaggedNum: 0,
    gameBoard: new GameBoard(config[initialDifficulty]).printState() 
}

function gameReducer(state = initialState, action) {

    switch (action.type) {
        case actionTypes.SET_NAME:
            return { ...state, ...{ name: action.name } }

        case actionTypes.SET_GAME_OVER:
            return { ...state, ...{ gameOver: action.gameOver } }

        case actionTypes.SET_DIFFICULTY:
            return { ...state, ...{ difficulty: action.difficulty } }

        case actionTypes.SET_TIMER:
            return { ...state, ...{ timer: action.timer } }

        case actionTypes.SET_FLAGGED_NUM:
            return { ...state, ...{ name: action.flaggedNum } }

        default:
            return state
    }
}

export default gameReducer 