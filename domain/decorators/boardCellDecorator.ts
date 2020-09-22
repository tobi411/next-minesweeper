import CellContentType from "./../../types/cellContentType";
import Cell from './../../types/cell';
import BoardCell from "./../boardCell";

class BoardCellDecorator implements Cell {
    protected cell: BoardCell;

    constructor(cell: BoardCell) {
        this.cell = cell;
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