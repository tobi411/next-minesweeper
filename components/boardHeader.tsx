import Counter from "./counter";
import Timer from "./timer";
import styles from "./../styles/board.module.css"
import { Container, Row, Col, DropdownButton, Dropdown } from "react-bootstrap"
import { ImCancelCircle } from "react-icons/im"
import { RiShareFill } from "react-icons/ri"
import { GiSpeaker } from "react-icons/gi"
import config from './../config';

interface IBoardHeader {
    // data: any
}

function BoardHeader(props: IBoardHeader) {
    return (
        <div className={styles.header_container}>
                <div className={'no_padding'}>
                    <select name="difficulty" defaultValue="medium" className={styles.select}>
                        {
                            Object.keys(config).map((key, index) => {

                                return <option key={`select-option-${index}`} value={key}>{key}</option>
                            })
                        }
                    </select>
                </div>
                <div style={{ textAlign: 'center' }} className={'no_padding'}>
                    <span className={styles.header_icon }><Counter data={27} /></span>
                    <span className={styles.header_icon}><Timer data={27} /></span>
                </div>
                <div style={{ textAlign: 'right' }} className={'no_padding'}>
                    <span className={`${styles.header_button} ${styles.header_icon}`}><GiSpeaker size={'1.6rem'} /></span>
                    <span className={`${styles.header_button} ${styles.header_icon}`}><RiShareFill size={'1.6rem'} /></span>
                    <span className={`${styles.header_button} ${styles.header_icon}`} onClick={() => console.log('testing')}><ImCancelCircle size={'1.6rem'} /></span>
                </div>
        
        </div>
    )
}

export default BoardHeader