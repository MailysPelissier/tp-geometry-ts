import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";


describe("test GeometryCollection", () => {
    it("test default constructor", () => {
        const c = new GeometryCollection();
        expect(c.getNumGeometries()).to.equal(0);
        expect(c.getGeometryN(0)).to.equal(undefined);
        expect(c.getType()).to.equal("GeometryCollection");
        expect(c.isEmpty()).to.be.true;     
        expect(c.getEnvelope().isEmpty()).to.be.true;
        expect(c.asText()).to.equal("GEOMETRYCOLLECTION EMPTY");
    });
    it("test constructor with Geometries", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([3.0, 0.0]);
        const l = new LineString([p1, p2]);
        const p3 = new Point([0.0, 0.0]);
        const c = new GeometryCollection([l, p3]);
        expect(c.getNumGeometries()).to.equal(2);
        expect(c.getGeometryN(2)).to.equal(undefined);
        expect(c.getGeometryN(0)).to.deep.equal(l);
        expect(c.getGeometryN(1)).to.deep.equal(p3);
        expect(c.getType()).to.equal("GeometryCollection");
        expect(c.isEmpty()).to.be.false;
        expect(c.getEnvelope().toString()).to.equal("[0.0, 0.0, 3.0, 1.0]");
        expect(c.asText()).to.equal("GEOMETRYCOLLECTION(LINESTRING(1.0 1.0,3.0 0.0),POINT(0.0 0.0))");
    });
    it("test copy translate geometrycollection", () => {
        const p1 = new Point([1.0, 1.0]);
        const p2 = new Point([3.0, 0.0]);
        const c = new GeometryCollection([p1, p2]);
        const c_clone = c.clone();
        expect(c).to.not.equal(c_clone);
        expect(c).to.deep.equal(c_clone);
        c_clone.translate(2,2);
        expect(c_clone.asText()).to.equal("GEOMETRYCOLLECTION(POINT(3.0 3.0),POINT(5.0 2.0))");
    });
});