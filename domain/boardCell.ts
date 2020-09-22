import Position from "../types/position";
import CellContentType from "../types/cellContentType";
import Cell from './../types/cell';

class BoardCell implements Cell {
    protected isLightTheme: boolean;
    protected isHidden: boolean;
    protected position: Position;
    protected value: string;
    protected type: CellContentType

    constructor(position: Position) {
        this.position = position;
        this.isHidden = true;
        this.isLightTheme = this.getIsLightTheme(position);
        this.value = '';
        this.type = CellContentType.EMPTY;
    }

    getPosition(): Position {
        return this.position;
    }

    getIsLightTheme(position: Position): boolean {
        return (position.x + position.y) % 2 == 0
    }

    getIsHidden(): boolean {
        return this.isHidden;
    }

    getType(): CellContentType {
        return this.type;
    }

    getValue(): string {
        return this.value;
    }

    setValue(val: string) {
        return this.value = val;
    }

    setType(t: CellContentType) {
        this.type = t;
    }
}

export default BoardCell