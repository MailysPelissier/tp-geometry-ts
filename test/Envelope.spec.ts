import "mocha";
import { expect } from "chai";
import Envelope from "../src/Envelope";
import EnvelopeBuilder from "../src/EnvelopeBuilder";


describe("test Envelope", () => {
    it("test default constructor", () => {
        const builder = new EnvelopeBuilder();
        const e = builder.build();
        expect(e.isEmpty()).to.be.true;
        expect(e.getXmin()).to.equal(Infinity);
        expect(e.getYmin()).to.equal(Infinity);
        expect(e.getXmax()).to.equal(-Infinity);
        expect(e.getYmax()).to.equal(-Infinity);
        expect(e.toString()).to.equal("[Infinity, Infinity, -Infinity, -Infinity]");
    });
    it("test constructor with coordinates", () => {
        const builder = new EnvelopeBuilder();
        builder.insert([0.0,1.0]);
        builder.insert([2.0,0.0]);
        builder.insert([1.0,3.0]);
        const e = builder.build();
        expect(e.isEmpty()).to.be.false;
        expect(e.getXmin()).to.equal(0);
        expect(e.getYmin()).to.equal(0);
        expect(e.getXmax()).to.equal(2);
        expect(e.getYmax()).to.equal(3);
        expect(e.toString()).to.equal("[0, 0, 2, 3]");
    });
});