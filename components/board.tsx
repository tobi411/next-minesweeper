import BoardRow from "./boardRow";
import { ICellProps } from "./../types/cell";
import styles from './../styles/board.module.css';

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