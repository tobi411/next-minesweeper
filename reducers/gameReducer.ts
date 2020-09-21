import { actionTypes } from './../actions/gameActions'
    
const initialState = {
    name: "Tobi Kehinde"
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