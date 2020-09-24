import styles from "./../styles/board.module.css";
import getHintFontColor from '../utils/hintColor';
import { GrFlagFill } from 'react-icons/gr';

interface ICounter {
    data: number;
}

export default function Counter(props: ICounter) {
    return (
        <span style={{ color: 'white' }}>
            <GrFlagFill color={'crimson'} size={'1.6rem'}/> {props.data}
        </span>
    )
}