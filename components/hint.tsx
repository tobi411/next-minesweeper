import styles from "./../styles/board.module.css";
import getHintFontColor from '../utils/hintColor';

interface IHint {
    data: string
}

export default function Hint(props: IHint) {
    return (
        <span className={styles.hint}
            style={{ color: getHintFontColor(parseInt(props.data)) }}>
            {props.data}
        </span>
    )
}