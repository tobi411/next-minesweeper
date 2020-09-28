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

    if (!props.data)
        return <></>;

    let gameBoard = props.data ? props.data.gameBoard : null;

    let gameStateMsg = '';
    let fontColor = 'black'

    if (data.gameWon) {
        gameStateMsg = "Congratulations! You've won the game!!";
        fontColor = "blue";
    }
    else if (data.gameOver) {
        gameStateMsg = "Game Over. You stepped on a mine."
        fontColor = "red";
    }

    return (
        <>
            {
                gameBoard ?
                    (
                        <Row data-testid="game-block">
                            <Col>
                                <p className={styles.resetText} style={{ color: fontColor, fontWeight: 'bold' }} data-testid="game-msg">{gameStateMsg}</p>
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