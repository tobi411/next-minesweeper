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
    let data = props.data;
    let gameBoard = props.data.gameBoard;
    let gameState = '';
    let fontColor = 'black'

    if (data.gameWon) {
        gameState = "Congratulations! You've won the game!!";
        fontColor = "blue";
    }
    else if (data.gameOver) {
        gameState = "Game Over! You stepped on a mine"
        fontColor = "red";
    }

    return (
        <>
            {
                props.data.gameBoard ?
                    (
                        <Row>
                            <Col>
                                <p className={styles.resetText} style={{ color: fontColor, fontWeight: 'bold' }}>{gameState}</p>
                                <p className={styles.resetText}>To reset your game, hit the  <ImCancelCircle /> button</p>
                                <BoardHeader
                                    flagged={data.numFlagged}
                                    timer={data.timer}
                                    difficulty={data.difficulty} />
                                <Board cells={gameBoard.cells} />
                            </Col>
                        </Row>
                    ) : null
            }
        </>

    )
}