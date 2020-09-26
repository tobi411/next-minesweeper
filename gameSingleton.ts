import GameBoard from "./domain/gameBoard";
import config, { defaultLevel } from './config';

let currGame = null;

export default {
    getGame: (): GameBoard => {
        if (!currGame) {
            currGame = new GameBoard(config[defaultLevel]);
        }
        return currGame;
    },
    changeGame: (difficulty: string): GameBoard => {
        currGame = new GameBoard(config[difficulty]);
        return currGame
    }
}