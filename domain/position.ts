class Position {
    x: number;
    y: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    getAdjNorthPosition(): Position {
        return new Position(this.x, this.y - 1);
    }

    getAdjNorthEastPosition() {
        return new Position(this.x + 1, this.y + 1)
    }

    getAdjEastPosition() {
        return new Position(this.x + 1, this.y)
    }

    getAdjSouthEastPosition() {
        return new Position(this.x + 1, this.y + 1)
    }

    getAdjSouthPosition() {
        return new Position(this.x, this.y + 1)
    }

    getAdjSouthWestPosition() {
        return new Position(this.x - 1, this.y + 1)
    }

    getAdjWestPosition() {
        return new Position(this.x - 1, this.y)
    }

    getAdjNorthWestPosition() {
        return new Position(this.x - 1, this.y - 1)
    }
}

export default Position