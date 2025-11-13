import Point from "./Point";
import Geometry from "./Geometry";


export default class LineString implements Geometry {
    private points?: Array<Point>;

    constructor(points?: Array<Point>) {
        this.points = points ;
    }

    getNumPoints(): number {
        return this.points ? this.points.length : Number.NaN;
    }

    getPointN(n:number) : Point {
        if (this.points && n<this.getNumPoints() && n>=0) {
            return this.points[n];
        }      
    }

    getType(): string {
        return "LineString";
    }

}