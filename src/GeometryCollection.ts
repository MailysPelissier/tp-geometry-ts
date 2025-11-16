import AbstractGeometry from "./AbstractGeometry";
import Envelope from "./Envelope";
import Geometry from "./Geometry";
import GeometryVisitor from "./GeometryVisitor";


export default class GeometryCollection extends AbstractGeometry {
    private geometries: Geometry[]

    constructor(geometries ?: Geometry[]) {
        super();
        this.geometries = geometries || [];
    }

    getNumGeometries(): number {
        return this.geometries.length;
    }

    getGeometryN(n: number): Geometry {
        return this.geometries[n];
    }

    getType(): string {
        return "GeometryCollection";
    }

    isEmpty(): boolean {
        return this.geometries.length == 0;
    }

    translate(dx: number, dy: number) {
        for (let geometry of this.geometries) {
            geometry.translate(dx, dy);
        }
    }

    clone(): Geometry {
        let geometrycollection = new Array<Geometry>;
        for (let geometry of this.geometries) {
            geometrycollection.push(geometry.clone());
        }
        return new GeometryCollection(geometrycollection);
    }

    accept<T>(visitor: GeometryVisitor<T>): T {
        return visitor.visitGeometryCollection(this);
    }   
}