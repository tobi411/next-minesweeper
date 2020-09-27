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

    setIsHidden(val: boolean) {
        return this.cell.setIsHidden(val)
    }
    
    getIsHidden() {
        return this.cell.getIsHidden()
    }

    setIsFlagged(val: boolean) {
        return this.cell.setIsFlagged(val);
    }

    getIsFlagged() {
        return this.cell.getIsFlagged();
    }

    explode() {
        return this.cell.explode();
    }

    printState() {
        return this.cell.printState()
    }
}

export default BoardCellDecorator