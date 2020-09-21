import { actionTypes } from './../actions/actions'
import { HYDRATE } from 'next-redux-wrapper'
import { combineReducers } from 'redux';

import gameReducer from "./gameReducer";

const initialState = {}


function nextReducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }

        default:
            return state
    }
}

const rootReducer = combineReducers({
    nextState: nextReducer,
    gameState: gameReducer
})

export default rootReducer 