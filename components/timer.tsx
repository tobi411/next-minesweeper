import styles from "./../styles/board.module.css";
import getHintFontColor from '../utils/hintColor';
import { FcAlarmClock } from 'react-icons/fc';

interface ICounter {
    data: number; 
}

export default function Timer(props: ICounter) {
    return (
        <span style={{ color: 'white' }}>
            <FcAlarmClock color={'black'} size={'1.6rem'}/> {props.data}
        </span>
    )
}