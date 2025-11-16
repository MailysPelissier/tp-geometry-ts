import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";
import LengthVisitor from "../src/LenghtVisitor"


describe("test LengthVisitor", () => {
    it("test LenghtVisitor with Point", () => {
        const p = new Point([3.0, 4.0]);
        const visitor = new LengthVisitor();
        const result = p.accept(visitor);
        expect(result).to.equal(0.0);
    });
    it("test LenghtVisitor with LineString", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);
        const l = new LineString([p1, p2]);
        const visitor = new LengthVisitor();
        const result = l.accept(visitor);
        expect(result).to.equal(2.0);
    });
    it("test LenghtVisitor with GeometryCollection", () => {
        const p1 = new Point([3.0, 4.0]);
        const p2 = new Point([1.0, 2.0]);
        const p3 = new Point([5.0, 6.0]);
        const p4 = new Point([3.0, 2.0]);
        const p5 = new Point([1.0, 3.0]);
        const l1 = new LineString([p1, p2]);
        const l2 = new LineString([p3, p4]);
        const g = new GeometryCollection([l1, l2, p5]);
        const visitor = new LengthVisitor();
        const result = g.accept(visitor);
        expect(result).to.equal(4.0);
    });    
});