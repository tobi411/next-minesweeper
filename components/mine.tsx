import styles from "./../styles/board.module.css";
import { FaBomb } from "react-icons/fa"

interface IMine {
    isExploded: boolean;
}

export default function Mine(props: IMine) {
    return (
        <div>
            <FaBomb color={props.isExploded ? 'red' : 'black'}/>
        </div>
    )
}