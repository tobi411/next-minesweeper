//TODO Delete this class
class Level {
    private name: string;
    private numMines: number;
    private numSideCells: number;


    constructor(name: string, numMines: number, numSideCells: number) {
        this.name = name;
        this.numMines = numMines;
        this.numSideCells = numSideCells;
    }

    getNumSideCells(): number {
        return this.numSideCells;
    }

    getNumMines(): number {
        return this.numMines;
    }

    getName(): string {
        return this.name;
    }
}

export default Level