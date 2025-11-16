import GeometryVisitor from "./GeometryVisitor";
import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


export default class WktVisitor implements GeometryVisitor<string> {
    private buffer: string;

    visitPoint(geometry: Point): void {
        if (geometry.isEmpty()) {
            this.buffer = "POINT EMPTY";
        }
        else {
            this.buffer = "POINT(" + geometry.x().toFixed(1) + " " + geometry.y().toFixed(1) + ")";
        }
    }

    visitLineString(geometry: LineString): void {
        if (geometry.isEmpty()) {
            this.buffer = "LINESTRING EMPTY";
        }
        else {
            let txt = "LINESTRING(";
            let n = geometry.getNumPoints();
            for (let i=0; i<n; i++) {
                let point:Point = geometry.getPointN(i);
                txt += point.x().toFixed(1) + " " + point.y().toFixed(1);
                if (i != n-1) {
                    txt += ",";
                }
            }
            txt += ")";
            this.buffer = txt;
        }
    }

    visitGeometryCollection(geometry: GeometryCollection): void {
        if (geometry.isEmpty()) {
            this.buffer = "GEOMETRYCOLLECTION EMPTY";
        }
        else {
            let txt = "GEOMETRYCOLLECTION(";
            let n = geometry.getNumGeometries();
            for (let i=0; i<n; i++) {
                let geom = geometry.getGeometryN(i);
                txt += geom.asText();
                if (i != n-1) {
                    txt += ",";
                }
            }
            txt += ")";
            this.buffer = txt;
        }
    }

    getResult(): string {
        return this.buffer;
    }
}