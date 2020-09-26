import { Row, Col } from 'react-bootstrap'
import Board from './board';
import BoardHeader from "./boardHeader"
import { IGameState } from "./../types/game"

interface IGame {
    data: IGameState
}

export default function Game( props: IGame ) {
    return (
        <Row>
            <Col>
                <BoardHeader flagged={props.data.flaggedNum} timer={props.data.timer}/>
                <Board cells={props.data.gameBoard.cells}/>
            </Col>
        </Row>
    )
}