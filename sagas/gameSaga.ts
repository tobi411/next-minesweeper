import {
    all,
    cancel,
    delay,
    fork,
    put,
    select,
    take,
    takeLatest,
    spawn,
    call
} from 'redux-saga/effects';
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
    setGameOver,
    setGameWon,
    checkForWin,
} from '../actions/gameActions';
import config, { MaxTime } from '../config/config';
import Position from './../domain/position';
import GameSingleton from "./../gameSingleton";

export const getGameState = state => state.gameState;

let gameBoard = GameSingleton.getGame();

function* runTimer(maxTime: number) {
    const gs = yield select(getGameState);
    let timer = gs.timer;

    try {
        while (true && timer < maxTime) {
            timer++;
            yield put(tickTimer(timer));
            yield delay(1000)
        }
    }
    finally {
        console.log('timer stopped');
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
    const gs = yield select(getGameState);
    let cellPosition = new Position(action.data.x, action.data.y);
    let cell = gameBoard.getCell(cellPosition);

    if (!gs.gameOver && !gs.gameWon && !cell.getIsFlagged()) {

        if (gs.timer === 0) {
            yield spawn(loadTimerUpdates);
            yield put(startTimer());
        }

        let numMoves = gs.numMoves;

        //Ensure the first move is never a mine
        if (numMoves === 0 && gameBoard.isMineCell(cellPosition)) {
            let level = gs.difficulty;
            let levelConfig = config[level];
            let newMinePos = gameBoard.generateMinePositions(1, levelConfig.boardWidth, levelConfig.boardHeight);
            gameBoard.replaceMine(cellPosition, newMinePos[0]);
        }

        gameBoard.openCell(cellPosition);

        if (gameBoard.isMineCell(cellPosition)) {
            //Opened a mine
            gameBoard.explodeCell(cellPosition);
            gameBoard.showMineCells();
            yield all([
                put(stopTimer()),
                put(setGameOver(true))
            ])
        } else {
            //Place hint or expand empty cells
            let numAdjacentMines = gameBoard.countAdjacentMines(cellPosition);
            if (numAdjacentMines > 0) {
                gameBoard.placeHintCell(cellPosition, numAdjacentMines.toString())
            } else {
                gameBoard.openAdjacentEmptyCells(cellPosition);
            }

            numMoves++;
        }

        yield all([
            put(updateBoard(gameBoard.printState())),
            put(setNumMoves(numMoves)),
            put(checkForWin()),
        ])
    }
}

function* setFlag(action: any) {
    const gs = yield select(getGameState);
    let numFlagged = gs.numFlagged;
    let numMoves = gs.numMoves;

    let cellPosition = new Position(action.data.position.x, action.data.position.y);
    let cell = gameBoard.getCell(cellPosition);

    if (cell.getIsHidden()) {
        let isFlagged = action.data.isFlagged;

        if (isFlagged === true) {
            numFlagged++;
            numMoves++;
        } else {
            numFlagged--;
            numMoves--;
        }

        gameBoard.toggleFlag(cellPosition, isFlagged);

        yield all([
            put(updateBoard(gameBoard.printState())),
            put(setNumFlagged(numFlagged)),
            put(setNumMoves(numMoves)),
            put(checkForWin()),
        ])
    }
}

function* resetGame(action: any) {
    yield all([
        put(stopTimer()),
        put(setGameOver(false)),
        put(setGameWon(false)),
        put(tickTimer(0)),
        put(setNumMoves(0)),
        put(setNumFlagged(0)),
        put(changeGame(action.difficulty)),
    ])
}

function* changeCurrGame(action: any) {
    gameBoard = GameSingleton.changeGame(action.difficulty);

    yield all([
        put(setDifficulty(action.difficulty)),
        put(updateBoard(gameBoard.printState()))
    ]);
}

function* checkGameWin() {
    let numFlaggedMines = gameBoard.getNumFlaggedMines();
    let numOpenedCells = gameBoard.getNumOpenedCells();
    let numBoardCells = gameBoard.getBoardWidth() * gameBoard.getBoardHeight();

    if ((numFlaggedMines + numOpenedCells) == numBoardCells) {
        yield all([
            put(setGameWon(true)),
            put(stopTimer()),
        ])
    }
}

function* rootSaga() {
    yield all([
        takeLatest(actionTypes.MAKE_MOVE, makeMove),
        takeLatest(actionTypes.CHANGE_GAME, changeCurrGame),
        takeLatest(actionTypes.RESET_GAME, resetGame),
        takeLatest(actionTypes.SET_FLAG, setFlag),
        takeLatest(actionTypes.CHECK_GAME_WIN, checkGameWin)
    ])
}

export default rootSaga