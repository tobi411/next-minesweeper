import GameBoard from "./domain/gameBoard";
import config, { defaultLevel } from './config';

let game = null;

export default {
    getGame: () => {
        if (game) {
            return game;
        } else {
            return game = new GameBoard(config[defaultLevel])
        }
    }
}