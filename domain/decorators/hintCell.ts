import CellContentType from "./../../types/cellContentType";
import GameCell from "../gameCell";
import BoardCellDecorator from './boardCellDecorator';

class HintCell extends BoardCellDecorator {

    constructor(cell: GameCell) {
        super(cell);
        cell.setType(CellContentType.HINT)
    }

    setValue(str: string) {
        return this.cell.setValue(str)
    }
}

export default HintCell