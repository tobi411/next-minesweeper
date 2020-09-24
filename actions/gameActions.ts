export const actionTypes = {
    SET_NAME: 'SET_NAME',
    SET_GAME_OVER: 'SET_GAME_OVER',
    SET_DIFFICULTY: 'SET_DIFFICULTY',
    TICK_TIMER: 'TICK_TIMER',
    START_TIMER: 'START_TIMER',
    SET_FLAGGED_NUM: 'SET_FLAGGED_NUM',
    OPEN_CELL: 'OPEN_CELL',
    UPDATE_BOARD: 'UPDATE_BOARD',
}

export function setName(name: string) {
    return { type: actionTypes.SET_NAME, name }
}

export function openCell(data: any) {
    return { type: actionTypes.OPEN_CELL, data }
}

export function updateBoard(gameBoard: any) {
    return { type: actionTypes.UPDATE_BOARD, gameBoard }
}

export function startTimer(){
    return { type: actionTypes.START_TIMER }
}

export function tickTimer(){
    return { type: actionTypes.TICK_TIMER }
}