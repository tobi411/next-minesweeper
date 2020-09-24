import { Row, Col } from 'react-bootstrap'
import Board from './board';
import BoardHeader from "./boardHeader"
import { useSelector } from "react-redux";
import { IGameState } from "./../types/game"

interface IGame {
    data: IGameState
}
export default function Game( props: IGame ) {
    console.log(props)
    return (
        <Row>
            <Col>
                <BoardHeader />
                <Board cells={props.data.gameBoard.cells}/>
            </Col>
        </Row>
    )
}