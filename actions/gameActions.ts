export const actionTypes = {
    SET_NAME: 'SET_NAME',
    SET_GAME_OVER: 'SET_GAME_OVER',
    SET_DIFFICULTY: 'SET_DIFFICULTY',
    TICK_TIMER: 'TICK_TIMER',
    START_TIMER: 'START_TIMER',
    SET_FLAGGED_NUM: 'SET_FLAGGED_NUM',
    MAKE_MOVE: 'MAKE_MOVE',
    UPDATE_BOARD: 'UPDATE_BOARD',
    INCREMENT_NUM_MOVES: 'INCREMENT_NUM_MOVES',
    CHANGE_GAME: 'CHANGE_GAME',
}

export function setName(name: string) {
    return { type: actionTypes.SET_NAME, name }
}

export function makeMove(data: any) {
    return { type: actionTypes.MAKE_MOVE, data }
}

export function updateBoard(gameBoard: any) {
    return { type: actionTypes.UPDATE_BOARD, gameBoard }
}

export function startTimer() {
    return { type: actionTypes.START_TIMER }
}

export function tickTimer(time: number) {
    return { type: actionTypes.TICK_TIMER, time }
}

export function incrementNumMoves() {
    return { type: actionTypes.INCREMENT_NUM_MOVES }
}

export function changeGame(difficulty: string) {
    return { type: actionTypes.CHANGE_GAME, difficulty }
}