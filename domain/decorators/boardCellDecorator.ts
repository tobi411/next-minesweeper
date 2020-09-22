import CellContentType from "./../../types/cellContentType";
import Cell from './../../types/cell';
import BoardCell from "./../boardCell";
import Position from "./../../types/position";

class BoardCellDecorator implements Cell {
    protected cell: BoardCell;

    constructor(cell: BoardCell) {
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