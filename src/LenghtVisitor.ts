import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";


export default class LengthVisitor implements GeometryVisitor<number> {

    visitPoint(point: Point): number {
        return 0.0;
    };

    visitLineString(linestring: LineString): number {
        return linestring.getNumPoints();
    };

    visitGeometryCollection(geometrycollection: GeometryCollection): number {
        let length = 0.0;
        let n = geometrycollection.getNumGeometries();
        for (let i=0; i<n; i++) {
            let geom = geometrycollection.getGeometryN(i); 
            if (geom instanceof LineString) {
                length += geom.getNumPoints();
            }
        }
        return length;
    };
}