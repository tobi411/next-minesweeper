import { actionTypes } from './../actions/gameActions'
import config from "./../config";

const initialState = {
    name: "Tobi Kehinde",
    gameOver: false,
    difficulty: 'medium',
    bombs: config['medium'].bombNum,
    timer: 0
}

function gameReducer(state = initialState, action) {
    switch (action.type) {

        case actionTypes.SET_NAME:
            return {
                ...state,
                ...{ name: action.name },
            }

        default:
            return state
    }
}

export default gameReducer 