import { all, call, delay, put, take, takeLatest, select } from 'redux-saga/effects'
import { actionTypes, updateBoard, tickTimer, startTimer, incrementNumMoves } from '../actions/gameActions'
import GameSingleton from "./../gameSingleton";
import Position from './../domain/position';
import config, { MaxTime } from './../config';

export const getGameState = state => state.gameState;

let gameBoard = GameSingleton.getGame();

function* runTimer() {
    const gs = yield select(getGameState);
    let timer = gs.timer;
    while (true && timer < MaxTime) {
        timer++;
        yield put(tickTimer(timer));
        yield delay(1000)
    }
}

function* makeMove(action: any) {
    let cellPosition = new Position(action.data.x, action.data.y)
    gameBoard.openCell(cellPosition);

    const gs = yield select(getGameState);

    if (gs.timer === 0) {
        yield put(startTimer())
    }

    let numMoves = gs.numMoves;
    if (numMoves === 0 && gameBoard.isMineCell(cellPosition)) {
        let level = gs.difficulty;
        let levelConfig = config[level];
        let newMinePos = gameBoard.generateMinePositions(1, levelConfig.boardWidth, levelConfig.boardHeight);
        gameBoard.replaceMine(cellPosition, newMinePos[0])
    }

    if (gameBoard.isMineCell(cellPosition)) {

    } else {
        let numAdjacentMines = gameBoard.countAdjacentMines(cellPosition);
        if (numAdjacentMines > 0) {
            gameBoard.placeHintCell(cellPosition, numAdjacentMines.toString())
        } else {
            gameBoard.openAdjacentEmptyCells(cellPosition);
        }
    }

    yield all([
        put(updateBoard(gameBoard.printState())),
        put(incrementNumMoves())
    ])
}

function* changeGame(action: any) {
    gameBoard = GameSingleton.changeGame(action.difficulty);
    yield put(updateBoard(gameBoard.printState()));
}


function* rootSaga() {
    yield all([
        takeLatest(actionTypes.MAKE_MOVE, makeMove),
        takeLatest(actionTypes.START_TIMER, runTimer),
        takeLatest(actionTypes.CHANGE_GAME, changeGame),
    ])
}

export default rootSaga