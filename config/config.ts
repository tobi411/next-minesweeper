export interface IConfig {
    boardWidth: number,
    boardHeight: number,
    bombNum: number,
}

export interface Config {
    [key: string]: IConfig
}

export const MaxTime = 999;

export const defaultLevel = 'medium';

const config: Config = {
    easy: {
        boardWidth: 8,
        boardHeight: 8,
        bombNum: 10,
    },
    medium: {
        boardWidth: 16,
        boardHeight: 16,
        bombNum: 40,
    },
    hard: {
        boardWidth: 30,
        boardHeight: 16,
        bombNum: 99,
    },
}

export default config