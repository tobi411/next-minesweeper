import CellContentType from "./../../types/cellContentType";
import ICell from './../../types/cell';
import GameCell from "../gameCell";
import Position from "./../../types/position";

class BoardCellDecorator implements ICell {
    protected cell: GameCell;

    constructor(cell: GameCell) {
        this.cell = cell;
    }

    getPosition(): Position {
        return this.cell.getPosition();
    }

    getType(): CellContentType {
        return this.cell.getType();
    }

    getValue(): string {
        return this.cell.getValue();
    }

    setValue(str: string) {
        return this.cell.setValue(str);
    }
}

export default BoardCellDecorator