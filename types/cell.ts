import CellContentType from './cellContentType';
import Position from "./position";

interface Cell {
    getPosition(): Position,
    getType(): CellContentType,
    getValue(): string,
    setValue(str: string): void,
}

export default Cell