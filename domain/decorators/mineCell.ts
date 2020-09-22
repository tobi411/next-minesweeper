import CellContentType from "./../../types/cellContentType";
import BoardCell from "./../boardCell";
import BoardCellDecorator from './boardCellDecorator';

class MineCell extends BoardCellDecorator{

    constructor(cell: BoardCell) {
        super(cell);
        cell.setType(CellContentType.MINE)
    }

    getValue(): string {
        return '*'; 
    }

}

export default MineCell