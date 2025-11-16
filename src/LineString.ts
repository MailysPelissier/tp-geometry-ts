import Point from "./Point";
import GeometryVisitor from "./GeometryVisitor";
import AbstractGeometry from "./AbstractGeometry";


export default class LineString extends AbstractGeometry {
    private points: Point[];

    constructor(points?: Point[]) {
        super();
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

    clone(): LineString {
        let linestring = new Array<Point>;
        for (let point of this.points) {
            linestring.push(point.clone());
        }
        return new LineString(linestring);
    }

    accept<T>(visitor: GeometryVisitor<T>): T {
        return visitor.visitLineString(this);
    }
}