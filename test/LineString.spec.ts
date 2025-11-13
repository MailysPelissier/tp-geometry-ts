import "mocha";
import { expect } from "chai";
import LineString from "../src/LineString";
import Point from "../src/Point";


describe("test LineString", () => {
    it("test default constructor", () => {
        const l = new LineString();
        expect(Number.isNaN(l.getNumPoints()));
        expect(l.getPointN(0)).to.equal(undefined)
        expect(l.getType()).to.equal("LineString");
    });
    it("test constructor with 2 Points", () => {
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const l = new LineString(Array(p1, p2));
        expect(l.getNumPoints()).to.equal(2);
        expect(l.getPointN(0)).to.equal(p1);
        expect(l.getPointN(10)).to.equal(undefined);
        expect(l.getType()).to.equal("LineString");
    });
});