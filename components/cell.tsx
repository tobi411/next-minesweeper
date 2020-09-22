import { Row, Col } from "react-bootstrap"
import BoardCell from "./../domain/boardCell";
import MineCell from "./../domain/decorators/mineCell"
import HintCell from "./../domain/decorators/hintCell"
import Position from "./../types/position";
import ICell from "./../types/cell";

let position: Position = {
    x: 0,
    y: 0
}
function Cell() {
    let cell = new BoardCell(position)
    let cell0 = new BoardCell(position);
    let cell1 = new BoardCell(position);
    
    let mineCell = new MineCell(cell0);

    let hintCell = new HintCell(cell1);
    hintCell.setValue('1');

    let cells: ICell[] = [cell, mineCell, hintCell]

    return (
        <Row>
            <Col>
                {cells.map((c: ICell, i: number) => (
                    <p key={i}>This is a cell. It is a {c.getType()} cell and its value is {c.getValue()}</p>
                ))}
            </Col>
        </Row>
    )
}

export default Cell;