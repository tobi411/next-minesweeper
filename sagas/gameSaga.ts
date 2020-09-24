import { all, call, delay, put, take, takeLatest, select } from 'redux-saga/effects'
import { actionTypes, updateBoard, tickTimer, startTimer } from '../actions/gameActions'
import GameSingleton from "./../gameSingleton";
import Position from './../domain/position';

export const getGameState = state => state.gameState

let gameBoard = GameSingleton.getGame();


function* runTimer() {
    while (true) {
        yield put(tickTimer())
        yield delay(1000)
    }
}

function* openBoardCell(action: any) {
    gameBoard.openCell(new Position(action.data.x, action.data.y));
    const gs = yield select(getGameState);

    if (gs.timer === 0) {
        yield put(startTimer())
    }

    yield put(updateBoard(gameBoard.printState()))
}

function* rootSaga() {
    yield all([
        takeLatest(actionTypes.OPEN_CELL, openBoardCell),
        takeLatest(actionTypes.START_TIMER, runTimer),
    ])
}

export default rootSaga