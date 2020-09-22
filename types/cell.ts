import CellContentType from './cellContentType';

interface Cell {
    getType(): CellContentType,
    getValue(): string,
    setValue(str: string): void,
}

export default Cell