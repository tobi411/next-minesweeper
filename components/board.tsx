import { Row, Col } from "react-bootstrap"
import Cell from "./cell";

function Board() {
    return (
        <Row>
            <Col>
                <p>This is a board</p>
                <Cell />
            </Col>
        </Row>
    )
}

export default Board;