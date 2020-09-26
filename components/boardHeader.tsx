import Counter from "./counter";
import Timer from "./timer";
import styles from "./../styles/board.module.css"
import { ImCancelCircle } from "react-icons/im"
import { RiShareFill } from "react-icons/ri"
import { GiSpeaker } from "react-icons/gi"
import config from './../config';
import { useDispatch } from "react-redux";
import { resetGame } from "./../actions/gameActions";

interface IBoardHeader {
    flagged: number,
    timer: number
    difficulty: string
}

function BoardHeader(props: IBoardHeader) {
    let dispatch = useDispatch();

    return (
        <div className={styles.header_container}>
            <div className={'no_padding'}>
                <select name="difficulty" defaultValue={props.difficulty} className={styles.select} onChange={(e) => { dispatch(resetGame(e.currentTarget.value)) }}>
                    {
                        Object.keys(config).map((key, index) => {
                            return <option key={`select-option-${index}`} value={key}>{key}</option>
                        })
                    }
                </select>
            </div>
            <div style={{ textAlign: 'center' }} className={'no_padding'}>
                <span className={styles.header_icon}><Counter data={props.flagged} /></span>
                <span className={styles.header_icon}><Timer data={props.timer} /></span>
            </div>
            <div style={{ textAlign: 'right' }} className={'no_padding'}>
                <span className={`${styles.header_button} ${styles.header_icon}`}><GiSpeaker size={'1.6rem'} /></span>
                <span className={`${styles.header_button} ${styles.header_icon}`}><RiShareFill size={'1.6rem'} /></span>
                <span className={`${styles.header_button} ${styles.header_icon}`} onClick={() => dispatch(resetGame(props.difficulty))}><ImCancelCircle size={'1.6rem'} /></span>
            </div>

        </div>
    )
}

export default BoardHeader