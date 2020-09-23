import CellContentType from './cellContentType';
import Position from "./position";

export default interface ICell {
    getPosition(): Position,
    getType(): CellContentType,
    getValue(): string,
    setValue(str: string): void,
}

export interface ICellProps {
    isLightTheme: boolean,
    position: {
        x: number,
        y: number,
    },
    value: string,
    type: CellContentType,
    flagged: boolean,
    isHidden: boolean,
}