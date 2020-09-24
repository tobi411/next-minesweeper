import { Row, Col } from "react-bootstrap"
import BoardRow from "./boardRow";
import BoardCell from "../domain/gameCell";
import Level from "./../domain/level";
import GameBoard from "../domain/gameBoard";
import MineCell from "./../domain/decorators/mineCell"
import HintCell from "./../domain/decorators/hintCell"
import { ICellProps } from "./../types/cell";
import styles from './../styles/board.module.css';
import config from "./../config"

interface IBoard {
    cells: ICellProps[][]
}

function Board(props: IBoard) {

    return (
        <div className={styles.board_container}>
            {
                props.cells.map((row, index) => {
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