import Geometry from "./Geometry";
import Envelope from "./Envelope";
import GeometryVisitor from "./GeometryVisitor";


export default class GeometryWithCachedEnvelope implements Geometry {
    private original: Geometry;
    private cachedEnvelope: Envelope;

    constructor(original: Geometry) {
        this.original = original;
        this.cachedEnvelope = new Envelope();
    }

    getType(): string {
        return this.original.getType();
    }

    isEmpty(): boolean {
        return this.original.isEmpty();
    }

    translate(dx: number, dy: number): void {
        this.original.translate(dx, dy);
        this.cachedEnvelope = new Envelope();
    }

    clone(): Geometry {
        const clone = new GeometryWithCachedEnvelope(this.original.clone());
        if (!this.cachedEnvelope.isEmpty()) {
            clone.getEnvelope();
        }
        return clone;
    }

    getEnvelope(): Envelope {
        if (this.cachedEnvelope.isEmpty()) {
            this.cachedEnvelope = this.original.getEnvelope();
        }
        return this.cachedEnvelope;
    }

    accept<T>(visitor: GeometryVisitor<T>): T {
        return this.original.accept(visitor);
    }

    asText(): string {
        return this.original.asText();
    }
}