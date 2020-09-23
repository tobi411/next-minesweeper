import CellContentType from "./../../types/cellContentType";
import ICell from './../../types/cell';
import GameCell from "../gameCell";
import Position from "../position";

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
        this.cell.setValue(str);
    }

    parseToJSON() {
        return this.cell.parseToJSON()
    }
}

export default BoardCellDecorator