import { useDispatch } from 'react-redux'
import styles from "./../styles/board.module.css";
import { BsFlagFill } from 'react-icons/bs';
import CellContentType from '../types/cellContentType';
import Hint from "./hint";
import { openCell } from "./../actions/gameActions";

interface IBoardCell {
    data: any
}

function Cell(props: IBoardCell) {
    const dispatch = useDispatch();

    let data = props.data;
    let content: JSX.Element;

    let backgroundCSS = '';

    if (data.isHidden === true) {
        backgroundCSS = data.isLightTheme ? styles.light_green : styles.green;
    } else {
        backgroundCSS = data.isLightTheme ? styles.light_salmon : styles.salmon;
    }

    if (data.isFlagged === true) {
        content = <BsFlagFill color={'crimson'} />
    }

    if (data.type === CellContentType.HINT) {
        content = <Hint data={data.value} />
    }

    return (
        <div
            className={`${styles.baseCell} ${styles.row} ${backgroundCSS}`}
            onClick={() => dispatch(openCell({ x: props.data.position.x, y: props.data.position.y }))}>
            {content}
        </div>
    )
}

export default Cell;