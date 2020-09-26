import CellContentType from './cellContentType';
import Position from "../domain/position";

export default interface ICell {
    getPosition(): Position,
    getType(): CellContentType,
    getValue(): string,
    setValue(str: string): void,
    printState(): ICellProps
    setIsHidden(val: boolean): void,
    getIsHidden(): boolean,
    setIsFlagged(val: boolean): void,
}

export interface ICellProps {
    isLightTheme: boolean,
    position: {
        x: number,
        y: number,
    },
    value: string,
    type: CellContentType,
    isFlagged: boolean,
    isHidden: boolean,
}