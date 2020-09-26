import { Row, Col } from "react-bootstrap"
import BoardCell from "./boardCell";
import Level from "./../domain/level";
import GameBoard from "../domain/gameBoard";
import MineCell from "./../domain/decorators/mineCell"
import HintCell from "./../domain/decorators/hintCell"
import ICell from "./../types/cell";
import styles from './../styles/board.module.css';

interface IBoardRow {
    data: any[]
}

function BoardRow(props: IBoardRow) {

    let row = props.data;

    return (
        <div className={styles.row}>
            {
                row.map((data, index) => {
                    return <BoardCell data={data} key={`cell-${index+1}`} />
                })
            }
        </div>
    )
}

export default BoardRow;