import { Row, Col } from 'react-bootstrap'
import Board from './board';
import BoardHeader from "./boardHeader"

export default function Game() {

    return (
        <Row>
            <Col>
                <BoardHeader/>
                <Board />
            </Col>
        </Row>
    )
}