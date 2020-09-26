import { Row, Col } from 'react-bootstrap'
import Board from './board';
import BoardHeader from "./boardHeader"
import { IGameState } from "./../types/game"
import styles from "./../styles/board.module.css";
import { ImCancelCircle } from "react-icons/im"

interface IGame {
    data: IGameState
}

export default function Game(props: IGame) {
    return (
        <Row>
            <Col>
                <BoardHeader
                    flagged={props.data.numFlagged}
                    timer={props.data.timer}
                    difficulty={props.data.difficulty} />
                <Board cells={props.data.gameBoard.cells} />
                <p className={styles.resetText}>Hit the <ImCancelCircle/> button to reset your current game</p>
            </Col>
        </Row>
    )
}