import Point from "./Point";
import Geometry from "./Geometry";
import Envelope from "./Envelope";
import EnvelopeBuilder from "./EnvelopeBuilder";


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

    clone(): LineString {
        let linestring = new Array<Point>;
        for (let point of this.points) {
            linestring.push(point.clone());
        }
        return new LineString(linestring);
    }

    getEnvelope(): Envelope {
        const builder = new EnvelopeBuilder();
        for (let point of this.points) {
            builder.insert([point.x(),point.y()])
        }
        return builder.build();
    }
}