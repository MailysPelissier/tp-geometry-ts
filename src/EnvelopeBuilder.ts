import Coordinate from "./Coordinate";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


export default class EnvelopeBuilder implements GeometryVisitor<void> {
    private xMin = Infinity;
    private xMax = -Infinity;
    private yMin = Infinity;
    private yMax = -Infinity;

    insert(coordinate: Coordinate): void {
        if (!coordinate || !isFinite(coordinate[0]) || !isFinite(coordinate[1])) return;
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

    visitPoint(point: Point): void {
        this.insert(point.getCoordinate());
    }

    visitLineString(linestring: LineString): void {
        let n = linestring.getNumPoints();
        for (let i=0; i<n; i++) {
            const point = linestring.getPointN(i);
            this.insert(point.getCoordinate());
        }
    }

    visitGeometryCollection(geometrycollection: GeometryCollection): void {
        let n = geometrycollection.getNumGeometries();
        for (let i=0; i<n; i++){
            const geom = geometrycollection.getGeometryN(i);
            geom.accept(this);
        }
    }
}