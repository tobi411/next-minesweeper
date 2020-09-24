export interface IConfig {
    boardWidth: number,
    boardHeight: number,
    bombNum: number,
    cellSize: number
}

export interface Config {
    [key: string]: IConfig
}

export const defaultLevel = 'medium';

const config: Config = {
    easy: {
        boardWidth: 8,
        boardHeight: 8,
        bombNum: 10,
        cellSize: 40
    },
    medium: {
        boardWidth: 16,
        boardHeight: 16,
        bombNum: 40,
        cellSize: 36
    },
    hard: {
        boardWidth: 30,
        boardHeight: 16,
        bombNum: 99,
        cellSize: 32
    },
}

export default config