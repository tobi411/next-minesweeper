import CellContentType from "./../../types/cellContentType";
import GameCell from "../gameCell";
import BoardCellDecorator from './boardCellDecorator';

class HintCell extends BoardCellDecorator {

    constructor(cell: GameCell, value: string) {
        super(cell);
        cell.setType(CellContentType.HINT);
        this.setValue(value);
        // cell.setIsHidden(false)
    }

    setValue(str: string) {
        this.cell.setValue(str);
    }
}

export default HintCell