import Point from "./Point";
import LineString from "./LineString";
import GeometryCollection from "./GeometryCollection";
import GeometryVisitor from "./GeometryVisitor";


export default class LogGeometryVisitor implements GeometryVisitor<void> {

    constructor (private log = console.log) {      
    }

    visitPoint(point: Point): void {
        if (point.isEmpty()) {
            this.log("Je suis un point vide.");
        }
        else {
            this.log("Je suis un point avec x=" + point.x().toFixed(1) + " et y=" + point.y().toFixed(1) + ".");
        }        
    }

    visitLineString(linestring: LineString): void {
        if (linestring.isEmpty()) {
            this.log("Je suis une polyligne vide.");
        }
        else {
            this.log("Je suis une polyligne définie par " + linestring.getNumPoints() + " point(s).");
        }   
    }

    visitGeometryCollection(geometrycollection: GeometryCollection): void {
        if (geometrycollection.isEmpty()) {
            this.log("Je suis une collection de géométries vide.");
        }
        else {
            this.log("Je suis une collection de géométries définie par " + geometrycollection.getNumGeometries() + " géométrie(s).");
        } 
    }

}