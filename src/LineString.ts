import Point from "./Point";
import Geometry from "./Geometry";


export default class LineString implements Geometry {
    private points: Point[];

    constructor(points?: Point[]) {
        this.points = points || [];
    }

    getNumPoints(): number {
        return this.points.length;
    }

    getPointN(n:number) : Point {
        if (n<this.getNumPoints() && n>=0) {
            return this.points[n];
        }      
    }

    getType(): string {
        return "LineString";
    }

    isEmpty(): boolean {
        return this.points.length == 0;
    }

    translate(dx: number, dy: number) : void {
        for (let point of this.points) {
            point.translate(dx, dy);
        }
    }
}