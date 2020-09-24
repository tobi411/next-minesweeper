import { Row, Col } from "react-bootstrap"
import BoardRow from "./boardRow";
import BoardCell from "../domain/gameCell";
import Level from "./../domain/level";
import GameBoard from "../domain/gameBoard";
import MineCell from "./../domain/decorators/mineCell"
import HintCell from "./../domain/decorators/hintCell"
import ICell from "./../types/cell";
import styles from './../styles/board.module.css';
import config from "./../config"

function Board() {
    let board = new GameBoard(config.hard);
    board.initializeBoard();

    let cells = board.getCells();
    // console.log(cells);

    return (
        <div className={styles.container}>
            {
                cells.map((row, index) => {
                    return (
                        <div key={`row-${index}`}>
                            <BoardRow data={row} />
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Board;