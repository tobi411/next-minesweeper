import Position from "./position";
import CellContentType from "../types/cellContentType";
import ICell, { ICellProps } from '../types/cell';

class BoardCell implements ICell {
    protected isLightTheme: boolean;
    protected position: Position;
    protected value: string;
    protected type: CellContentType;
    protected isHidden: boolean;
    protected isFlagged: boolean;
    protected isExploded: boolean;

    constructor(position: Position) {
        this.position = position;
        this.isHidden = true;
        this.isLightTheme = this.getIsLightTheme(position);
        this.value = '_';
        this.type = CellContentType.EMPTY;
        this.isFlagged = false;
        this.isExploded = false;
    }

    getPosition(): Position {
        return this.position;
    }

    getIsLightTheme(position: Position): boolean {
        return (position.x + position.y) % 2 === 0
    }

    getIsHidden(): boolean {
        return this.isHidden;
    }

    getType(): CellContentType {
        return this.type;
    }

    getValue(): string {
        return this.value;
    }

    getIsFlagged() {
        return this.isFlagged;
    }

    setValue(val: string) {
        this.value = val;
    }

    setType(t: CellContentType) {
        this.type = t;
    }

    setIsFlagged(val: boolean) {
        this.isFlagged = val;
    }

    setIsHidden(hidden: boolean) {
        this.isHidden = hidden;
    }

    explode() {
        this.isExploded = true;
    }

    printState(): ICellProps {
        return {
            isLightTheme: this.isLightTheme,
            position: {
                x: this.position.x,
                y: this.position.y
            },
            value: this.value,
            type: this.type,
            isFlagged: this.isFlagged,
            isHidden: this.isHidden,
            isExploded: this.isExploded,
        }
    }
}

export default BoardCell