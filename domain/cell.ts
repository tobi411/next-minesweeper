import Position from "./../types/position"

class Cell {
    isLightTheme: boolean;
    isHidden: boolean;
    position: Position;

    constructor(position: Position) {
       this.position = position;
       this.isHidden = true;
       this.isLightTheme = this.getLightTheme(position);
    }

    getLightTheme(position: Position): boolean {
        return (position.x + position.y) % 2 == 0
    }
}

export default Cell