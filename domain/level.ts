class Level {
    private name: string;
    private numMines: number;
    private numSideCells: number;
    

    constructor(name: string, numMines: number, numSideCells: number) {
        this.name = name;
        this.numMines= numMines;
        this.numSideCells = numSideCells;
    }
}

export default Level