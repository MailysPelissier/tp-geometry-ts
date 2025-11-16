import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";


export default interface GeometryVisitor {
    visitPoint(point: Point): void;
    visitLineString(linestring: LineString): void;
    visitGeometryCollection(geometrycollection: GeometryCollection): void;
}