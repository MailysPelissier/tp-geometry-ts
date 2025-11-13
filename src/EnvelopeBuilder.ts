import Coordinate from "./Coordinate";
import Envelope from "./Envelope";


export default class EnvelopeBuilder {
    private xMin = Infinity;
    private xMax = -Infinity;
    private yMin = Infinity;
    private yMax = -Infinity;

    insert(coordinate: Coordinate): void {
        this.xMin = Math.min(this.xMin, coordinate[0]);
        this.xMax = Math.max(this.xMax, coordinate[0]);
        this.yMin = Math.min(this.yMin, coordinate[1]);
        this.yMax = Math.max(this.yMax, coordinate[1]);
    }

    build(): Envelope {
        let bottomLeft = [this.xMin,this.yMin];
        let topRight = [this.xMax, this.yMax];
        return new Envelope(bottomLeft, topRight);
    }
}