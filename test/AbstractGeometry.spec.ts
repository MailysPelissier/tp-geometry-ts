import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test AbstractGeometry", () => {
    it("test empty point", () => {
        const p = new Point();
        expect(p.asText()).to.equal("POINT EMPTY");
    });
    it("test point with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.asText()).to.equal("POINT(3.0 4.0)");
    });
    it("test empty linestring", () => {
        const l = new LineString();
        expect(l.asText()).to.equal("LINESTRING EMPTY");
    });
    it("test linestring with coordinates", () => {
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const l = new LineString(Array(p1, p2));
        expect(l.asText()).to.equal("LINESTRING(1.0 3.0,2.0 4.0)");
    });
});