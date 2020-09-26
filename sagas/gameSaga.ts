import { all, cancel, delay, fork, put, select, take, takeLatest } from 'redux-saga/effects';
import {
    actionTypes,
    setNumMoves,
    startTimer,
    stopTimer,
    tickTimer,
    updateBoard,
    changeGame,
    setNumFlagged,
    setDifficulty,
} from '../actions/gameActions';
import config, { MaxTime } from './../config';
import Position from './../domain/position';
import GameSingleton from "./../gameSingleton";

export const getGameState = state => state.gameState;

let gameBoard = GameSingleton.getGame();

function* runTimer(maxTime: number) {
    const gs = yield select(getGameState);
    let timer = gs.timer;
    while (true && timer < maxTime) {
        timer++;
        yield put(tickTimer(timer));
        yield delay(1000)
    }
}

function* loadTimerUpdates() {
    while (yield take(actionTypes.START_TIMER)) {
        const timerTask = yield fork(runTimer, MaxTime);
        yield take(actionTypes.STOP_TIMER);
        yield cancel(timerTask);
    }
}

function* makeMove(action: any) {
    let cellPosition = new Position(action.data.x, action.data.y);
    gameBoard.openCell(cellPosition);

    const gs = yield select(getGameState);

    if (gs.timer === 0) {
        yield fork(loadTimerUpdates);
        yield put(startTimer())
    }

    let numMoves = gs.numMoves;

    //Ensure the first move is never a mine
    if (numMoves === 0 && gameBoard.isMineCell(cellPosition)) {
        let level = gs.difficulty;
        let levelConfig = config[level];
        let newMinePos = gameBoard.generateMinePositions(1, levelConfig.boardWidth, levelConfig.boardHeight);
        gameBoard.replaceMine(cellPosition, newMinePos[0])
    }

    if (gameBoard.isMineCell(cellPosition)) {

    } else {
        //Place hint or expand empty cells
        let numAdjacentMines = gameBoard.countAdjacentMines(cellPosition);
        if (numAdjacentMines > 0) {
            gameBoard.placeHintCell(cellPosition, numAdjacentMines.toString())
        } else {
            gameBoard.openAdjacentEmptyCells(cellPosition);
        }
    }

    yield all([
        put(updateBoard(gameBoard.printState())),
        put(setNumMoves(numMoves++))
    ])
}

function* setFlag(action: any) {
    const gs = yield select(getGameState);
    let numFlagged = gs.numFlagged;
    let cellPosition = new Position(action.data.position.x, action.data.position.y);
    let isFlagged = action.data.isFlagged;

    if (isFlagged === true) {
        numFlagged++;
    } else {
        numFlagged--;
    }

    gameBoard.toggleFlag(cellPosition, isFlagged);

    yield all([
        put(updateBoard(gameBoard.printState())),
        put(setNumFlagged(numFlagged)),
    ])
}

function* resetGame(action: any) {
    yield all([
        put(stopTimer()),
        put(tickTimer(0)),
        put(changeGame(action.difficulty)),
        put(setNumFlagged(0)),
    ])
}

function* changeCurrGame(action: any) {
    gameBoard = GameSingleton.changeGame(action.difficulty);

    yield all([
        put(setDifficulty(action.difficulty)),
        put(updateBoard(gameBoard.printState()))
    ]);
}


function* rootSaga() {
    yield all([
        takeLatest(actionTypes.MAKE_MOVE, makeMove),
        takeLatest(actionTypes.CHANGE_GAME, changeCurrGame),
        takeLatest(actionTypes.RESET_GAME, resetGame),
        takeLatest(actionTypes.SET_FLAG, setFlag),
    ])
}

export default rootSaga