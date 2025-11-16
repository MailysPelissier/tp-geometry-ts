import Coordinate from "./Coordinate";


export default class Envelope {
    private bottomLeft?: Coordinate;
    private topRight?: Coordinate;

    constructor(bottomLeft?: Coordinate, topRight?: Coordinate) {
        this.bottomLeft = bottomLeft ?? [Infinity,Infinity];
        this.topRight = topRight ?? [-Infinity,-Infinity];
    }

    isEmpty(): boolean {
        return (this.bottomLeft[0] == Infinity);
    }

    getXmin(): number {
        return this.bottomLeft[0];
    }

    getYmin(): number {
        return this.bottomLeft[1];
    }

    getXmax(): number {
        return this.topRight[0];
    }

    getYmax(): number {
        return this.topRight[1];
    }

    toString(): String {
        return "[" + this.getXmin().toFixed(1) + ", " + this.getYmin().toFixed(1) + ", " + this.getXmax().toFixed(1) + ", " + this.getYmax().toFixed(1) + "]"
    }

}