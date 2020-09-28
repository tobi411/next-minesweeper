import BoardCell from "./boardCell";
import styles from './../styles/board.module.css';
import { ICellProps } from '../types/cell';

interface IBoardRow {
    data: ICellProps[]
}

function BoardRow(props: IBoardRow) {

    let row = props.data;

    return (
        <div className={styles.row} data-testid="board-row">
            {
                row.map((data, index) => {
                    return <BoardCell data={data} key={`cell-${index + 1}`} />
                })
            }
        </div>
    )
}

export default BoardRow;