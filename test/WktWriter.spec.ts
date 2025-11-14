import "mocha";
import { expect } from "chai";
import WktWriter from "../src/WktWriter";
import Point from "../src/Point";
import LineString from "../src/LineString";


describe("test WktWriter", () => {
    it("test empty point", () => {
        const w = new WktWriter();
        const p = new Point();
        expect(p.isEmpty()).to.be.true;
        expect(w.write(p)).to.equal("POINT EMPTY");
    });
    it("test point with coordinates", () => {
        const w = new WktWriter();
        const p = new Point([3.0,4.0]);
        expect(p.isEmpty()).to.be.false;
        expect(w.write(p)).to.equal("POINT(3.0 4.0)");
    });
    it("test empty linestring", () => {
        const w = new WktWriter();
        const l = new LineString();
        expect(l.isEmpty()).to.be.true;
        expect(w.write(l)).to.equal("LINESTRING EMPTY");
    });
    it("test linestring with coordinates", () => {
        const w = new WktWriter();
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const l = new LineString(Array(p1, p2));
        expect(l.isEmpty()).to.be.false;
        expect(w.write(l)).to.equal("LINESTRING(1.0 3.0,2.0 4.0)");
    });
});