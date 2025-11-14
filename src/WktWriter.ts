import Coordinate from "./Coordinate";
import Point from "./Point";
import LineString from "./LineString";
import Geometry from "./Geometry";


export default class WktWriter {
    
    write(geometry: Geometry): String {
        if (geometry instanceof Point){
            if (geometry.isEmpty()) {
                return "POINT EMPTY";
            }
            else {
                return "POINT(" + geometry.x().toFixed(1) + " " + geometry.y().toFixed(1) + ")";
            }
        }
        else if (geometry instanceof LineString){
            if (geometry.isEmpty()) {
                return "LINESTRING EMPTY";
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
                return txt;
            }    
        }
        else {
            throw new TypeError("geometry type not supported");
        }
    }
}