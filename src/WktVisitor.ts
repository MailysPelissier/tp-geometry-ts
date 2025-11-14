import GeometryVisitor from "./GeometryVisitor";
import LineString from "./LineString";
import Point from "./Point";
import WktWriter from "./WktWriter";


export default class WktVisitor implements GeometryVisitor {
    private buffer: string;

    visitPoint(point: Point): void {
        const w = new WktWriter();
        this.buffer = w.write(point);
    }

    visitLineString(linestring: LineString): void {
        const w = new WktWriter();
        this.buffer = w.write(linestring);
    }

    getResult(): string {
        return this.buffer;
    }
}