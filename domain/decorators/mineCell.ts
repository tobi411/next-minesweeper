import CellContentType from "./../../types/cellContentType";
import GameCell from "../gameCell";
import BoardCellDecorator from './boardCellDecorator';

class MineCell extends BoardCellDecorator{

    constructor(cell: GameCell) {
        super(cell);
        cell.setType(CellContentType.MINE)
    }

    getValue(): string {
        return '*'; 
    }

}

export default MineCell