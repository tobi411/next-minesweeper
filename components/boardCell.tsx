import { Row, Col } from "react-bootstrap"
import BoardCell from "../domain/gameCell";
import Level from "./../domain/level";
import GameBoard from "../domain/gameBoard";
import MineCell from "./../domain/decorators/mineCell"
import HintCell from "./../domain/decorators/hintCell"
import ICell from "./../types/cell";
import Position from "./../types/position";
import styles from "./../styles/board.module.css";
import { BsFlagFill  } from 'react-icons/bs';
import { JsxElement } from "typescript";

// let position = new Position(0,0);
interface IBoardCell {
    data: any
}

function Cell(props: IBoardCell) {
    let data = props.data;
    let content: JSX.Element;

    let backgroundCSS = '';

    if (data.isHidden === true) {
        backgroundCSS = data.isLightTheme ? styles.light_green : styles.green;
    } else {
        backgroundCSS = data.isLightTheme ? styles.light_salmon : styles.salmon;
    }

    if (data.isFlagged) {
        content = <BsFlagFill color={'crimson'} />
    }

    return (
        <div className={`${styles.baseCell} ${styles.row} ${backgroundCSS}`}>
            {content}
        </div>
    )
}

export default Cell;