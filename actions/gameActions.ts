import Position from "./../domain/position";

export const actionTypes = {
    SET_NAME: 'SET_NAME',
    SET_GAME_OVER: 'SET_GAME_OVER',
    SET_GAME_WON: 'SET_GAME_WON',
    SET_DIFFICULTY: 'SET_DIFFICULTY',
    TICK_TIMER: 'TICK_TIMER',
    START_TIMER: 'START_TIMER',
    SET_FLAG: 'SET_FLAG',
    SET_NUM_FLAGGED: 'SET_NUM_FLAGGED',
    MAKE_MOVE: 'MAKE_MOVE',
    UPDATE_BOARD: 'UPDATE_BOARD',
    SET_NUM_MOVES: 'SET_NUM_MOVES',
    CHANGE_GAME: 'CHANGE_GAME',
    STOP_TIMER: 'STOP_TIMER',
    RESET_GAME: 'RESET_GAME',
    CHECK_GAME_WIN: 'CHECK_GAME_WIN',
}

export function setName(name: string) {
    return { type: actionTypes.SET_NAME, name }
}

export function setGameOver(gameOver: boolean) {
    return { type: actionTypes.SET_GAME_OVER, gameOver }
}

export function setGameWon(gameWon: boolean) {
    return { type: actionTypes.SET_GAME_WON, gameWon }
}

export function makeMove(data: any) {
    return { type: actionTypes.MAKE_MOVE, data }
}

export function setFlag(position: any, isFlagged: boolean) {
    return {
        type: actionTypes.SET_FLAG,
        data: {
            position,
            isFlagged,
        }
    }
}

export function updateBoard(gameBoard: any) {
    return { type: actionTypes.UPDATE_BOARD, gameBoard }
}

export function startTimer() {
    return { type: actionTypes.START_TIMER }
}

export function stopTimer() {
    return { type: actionTypes.STOP_TIMER }
}

export function tickTimer(time: number) {
    return { type: actionTypes.TICK_TIMER, time }
}

export function setNumMoves(numMoves: number) {
    return { type: actionTypes.SET_NUM_MOVES, numMoves }
}

export function setNumFlagged(numFlagged: number) {
    return { type: actionTypes.SET_NUM_FLAGGED, numFlagged }
}

export function changeGame(difficulty: string) {
    return { type: actionTypes.CHANGE_GAME, difficulty }
}

export function resetGame(difficulty: string) {
    return { type: actionTypes.RESET_GAME, difficulty }
}

export function setDifficulty(difficulty: string) {
    return { type: actionTypes.SET_DIFFICULTY, difficulty }
}

export function checkForWin() {
    return { type: actionTypes.CHECK_GAME_WIN }
}