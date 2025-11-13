import "mocha";
import { expect } from "chai";
import Point from "../src/Point";


describe("test Point", () => {
    it("test default constructor", () => {
        const p = new Point();
        expect(p.getCoordinate()).to.deep.equal([]);
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.be.true;
        expect(Number.isNaN(p.x()));
        expect(Number.isNaN(p.y()));
    });
    it("test constructor with coordinates", () => {
        const p = new Point([3.0,4.0]);
        expect(p.getCoordinate()).to.deep.equal([3.0,4.0]);
        expect(p.getType()).to.equal("Point");
        expect(p.isEmpty()).to.be.false;
        expect(p.x()).to.equal(3.0);
        expect(p.y()).to.equal(4.0);
    });
    it("translate and clone point", () => {
        const p = new Point([3.0,4.0]);
        const pcopy = p.clone();
        p.translate(2,-2);
        expect(p.getCoordinate()).to.deep.equal([5.0,2.0]);
        expect(pcopy.getCoordinate()).to.deep.equal([3.0,4.0]);
    });
    it("envelope point", () => {
        const p = new Point([3.0,4.0]);
        const e = p.getEnvelope();
        expect(e.toString()).to.equal("[3, 4, 3, 4]");
    });
});

