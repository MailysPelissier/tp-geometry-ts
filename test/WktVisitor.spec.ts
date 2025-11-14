import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import WktVisitor from "../src/WktVisitor";


describe("test WktVisitor", () => {
    it("test empty point", () => {
        const visitor = new WktVisitor();
        const p = new Point();
        p.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT EMPTY");
    });
    it("test point with coordinates", () => {
        const visitor = new WktVisitor();
        const p = new Point([3.0,4.0]);
        p.accept(visitor);
        expect(visitor.getResult()).to.equal("POINT(3.0 4.0)");
    });
    it("test empty linestring", () => {
        const visitor = new WktVisitor();
        const l = new LineString();
        l.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING EMPTY");
    });
    it("test linestring with coordinates", () => {
        const visitor = new WktVisitor();
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const l = new LineString(Array(p1, p2));
        l.accept(visitor);
        expect(visitor.getResult()).to.equal("LINESTRING(1.0 3.0,2.0 4.0)");
    });
});