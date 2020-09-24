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
            <Container>
                <Row>
                    <Col xs={4}>
                        <select name="difficulty" defaultValue="medium" className={styles.select}>
                            {
                                Object.keys(config).map((key, index) => {

                                    return <option key={`select-option-${index}`} value={key}>{key}</option>
                                })
                            }
                        </select>
                    </Col>
                    <Col xs={4} style={{ textAlign: 'center' }}>
                        <span className={styles.header_icon}><Counter data={27} /></span>
                        <span className={styles.header_icon}><Timer data={27} /></span>
                    </Col>
                    <Col xs={4} style={{ textAlign: 'right' }}>
                        <span className={`${styles.header_button} ${styles.header_icon}`}><GiSpeaker size={'1.6rem'} /></span>
                        <span className={`${styles.header_button} ${styles.header_icon}`}><RiShareFill size={'1.6rem'} /></span>
                        <span className={`${styles.header_button} ${styles.header_icon}`} onClick={() => console.log('testing')}><ImCancelCircle size={'1.6rem'} /></span>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BoardHeader