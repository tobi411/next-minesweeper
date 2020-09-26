import { useDispatch } from 'react-redux'
import styles from "./../styles/board.module.css";
import { BsFlagFill } from 'react-icons/bs';
import CellContentType from '../types/cellContentType';
import Hint from "./hint";
import Mine from "./mine";
import { makeMove, setFlag } from "./../actions/gameActions";

interface IBoardCell {
    data: any
}

function Cell(props: IBoardCell) {
    const dispatch = useDispatch();

    let data = props.data;
    let isHidden = data.isHidden;
    let content: JSX.Element;
    let backgroundCSS = '';

    if (isHidden == true) {
        backgroundCSS = data.isLightTheme ? styles.light_green : styles.green;
    } else {
        backgroundCSS = data.isLightTheme ? styles.light_salmon : styles.salmon;
    }

    if (data.isFlagged === true) {
        content = <BsFlagFill color={'crimson'} />
    } else {
        if (!isHidden && data.type === CellContentType.HINT) {
            content = <Hint data={data.value} />
        }

        if (!isHidden && data.type === CellContentType.MINE) {
            content = <Mine />
        }
    }

    return (
        <div
            className={`${styles.baseCell} ${styles.row} ${backgroundCSS}`}
            onClick={() => dispatch(makeMove({ x: props.data.position.x, y: props.data.position.y }))}
            onContextMenu={(e) => {
                e.preventDefault();
                let position = { x: props.data.position.x, y: props.data.position.y };
                return dispatch(setFlag(position, !props.data.isFlagged));
            }}>
            {content}
        </div>
    )
}

export default Cell;