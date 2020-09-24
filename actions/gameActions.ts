export const actionTypes = {
    SET_NAME: 'SET_NAME',
    SET_GAME_OVER: 'SET_GAME_OVER',
    SET_DIFFICULTY: 'SET_DIFFICULTY',
    SET_TIMER: 'SET_TIMER',
    SET_FLAGGED_NUM: 'SET_FLAGGED_NUM',
}

export function setName(name: string) {
    return { type: actionTypes.SET_NAME, name }
}