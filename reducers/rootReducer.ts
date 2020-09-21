import { actionTypes } from './../actions/actions'
import { HYDRATE } from 'next-redux-wrapper'

const initialState = {
    name: "Tobi Kehinde"
}

function rootReducer(state = initialState, action) {
    switch (action.type) {
        case HYDRATE: {
            return { ...state, ...action.payload }
        }

        case actionTypes.SET_NAME:
            return {
                ...state,
                ...{ name: action.name },
            }

        default:
            return state
    }
}

export default rootReducer 