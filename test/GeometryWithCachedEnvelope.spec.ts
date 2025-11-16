import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryWithCachedEnvelope from "../src/GeometryWithCachedEnvelope";
import WktVisitor from "../src/WktVisitor";


describe("test GeometryWithCachedEnvelope", () => {
    it("test empty point", () => {
        const p = new Point();
        const g = new GeometryWithCachedEnvelope(p);
        expect(g.getType()).to.equal("Point");
        expect(g.isEmpty()).to.be.true;
        expect(g.getEnvelope().isEmpty()).to.be.true;
        expect(g.getEnvelope().toString()).to.equal("[Infinity, Infinity, -Infinity, -Infinity]");
        expect(g.asText()).to.equal("POINT EMPTY");
        const visitor = new WktVisitor();
        g.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });
    it("test point with coordinates", () => {
        const p = new Point([3.0,4.0]);
        const g = new GeometryWithCachedEnvelope(p);
        expect(g.getType()).to.equal("Point");
        expect(g.isEmpty()).to.be.false;
        expect(g.getEnvelope().isEmpty()).to.be.false;
        expect(g.getEnvelope().toString()).to.equal("[3.0, 4.0, 3.0, 4.0]");
        expect(g.asText()).to.equal("POINT(3.0 4.0)");
        g.translate(1,1);
        expect(g.getEnvelope().toString()).to.equal("[4.0, 5.0, 4.0, 5.0]");
        const gclone = g.clone();
        expect(g).to.not.equal(gclone);
        expect(g.getEnvelope()).to.deep.equal(gclone.getEnvelope());
        const visitor = new WktVisitor();
        g.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(4.0 5.0)");
    });
    it("test empty linestring", () => {
        const l = new LineString();
        const g = new GeometryWithCachedEnvelope(l);
        expect(g.getType()).to.equal("LineString");
        expect(g.isEmpty()).to.be.true;
        expect(g.getEnvelope().isEmpty()).to.be.true;
        expect(g.getEnvelope().toString()).to.equal("[Infinity, Infinity, -Infinity, -Infinity]");
        expect(g.asText()).to.equal("LINESTRING EMPTY");
        const visitor = new WktVisitor();
        g.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });
    it("test linestring with coordinates", () => {
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const p3 = new Point([6,2]);
        const l = new LineString(Array(p1, p2, p3));
        const g = new GeometryWithCachedEnvelope(l);
        expect(g.getType()).to.equal("LineString");
        expect(g.isEmpty()).to.be.false;
        expect(g.getEnvelope().isEmpty()).to.be.false;
        expect(g.getEnvelope().toString()).to.equal("[1.0, 2.0, 6.0, 4.0]");
        expect(g.asText()).to.equal("LINESTRING(1.0 3.0,2.0 4.0,6.0 2.0)");
        g.translate(1,1);
        expect(g.getEnvelope().toString()).to.equal("[2.0, 3.0, 7.0, 5.0]");
        const gclone = g.clone();
        expect(g).to.not.equal(gclone);
        expect(g.getEnvelope()).to.deep.equal(gclone.getEnvelope());
        const visitor = new WktVisitor();
        g.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(2.0 4.0,3.0 5.0,7.0 3.0)");
    });
});