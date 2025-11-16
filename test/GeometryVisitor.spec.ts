import "mocha";
import { expect } from "chai";
import Point from "../src/Point";
import LineString from "../src/LineString";
import GeometryCollection from "../src/GeometryCollection";
import LogGeometryVisitor from "../src/LogGeometryVisitor";


describe("test LogGeometryVisitor", () => {
    it("test empty point", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string) => {
            result = message;
        })
        const p = new Point();
        p.accept(visitor);
        expect(result).to.equal("Je suis un point vide.")
    });
    it("test point with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string) => {
            result = message;
        })
        const p = new Point([3.0,4.0]);
        p.accept(visitor);
        expect(result).to.equal("Je suis un point avec x=3.0 et y=4.0.");
    });
    it("test empty linestring", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string) => {
            result = message;
        })
        const l = new LineString();
        l.accept(visitor);
        expect(result).to.equal("Je suis une polyligne vide.")
    });
    it("test linestring with coordinates", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string) => {
            result = message;
        })
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const l = new LineString(Array(p1, p2));
        l.accept(visitor);
        expect(result).to.equal("Je suis une polyligne définie par 2 point(s).");
    });
    it("test empty geometrycollection", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string) => {
            result = message;
        })
        const g = new GeometryCollection();
        g.accept(visitor);
        expect(result).to.equal("Je suis une collection de géométries vide.")
    });
    it("test geometrycollection with geometries", () => {
        let result = "";
        const visitor = new LogGeometryVisitor((message:string) => {
            result = message;
        })
        const p1 = new Point([1,3]);
        const p2 = new Point([2,4]);
        const p3 = new Point([2,5]);
        const l = new LineString(Array(p1, p2));
        const c = new GeometryCollection([l, p3]);
        c.accept(visitor);
        expect(result).to.equal("Je suis une collection de géométries définie par 2 géométrie(s)."); 
    });
});