import CellContentType from "./../../types/cellContentType";
import BoardCell from "./../boardCell";
import BoardCellDecorator from './boardCellDecorator';

class HintCell extends BoardCellDecorator {

    constructor(cell: BoardCell) {
        super(cell);
        cell.setType(CellContentType.HINT)
    }

    setValue(str: string) {
        return this.cell.setValue(str)
    }
}

export default HintCell