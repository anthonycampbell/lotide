const eqObjects = require('../eqObjects');
const assert = require('chai').assert;
const o1 = { k1: "v1", k2: "v2" };
const o2 = { k1: "v1", k2: "v2" };
const o3 = { k3: "v2", k2: "v2" };
const o4 = { k1: "v1", k2: "v2", k3: "v3" };
const o5 = { k4: "1", k5: ["2", 3] };
const o6 = { k5: ["2", 3], k4: "1" };
const o7 = { k4: "1", k5: ["2", 3, 4] };
describe("#eqObjects", () => {
  it("o1 and o2 are equal", () => {
    assert.strictEqual(eqObjects(o1, o2), true);
  });
  it("o2 and o3 are not equal", () => {
    assert.strictEqual(eqObjects(o2, o3), false);
  });
  it("o3 and o4 are not equal", () => {
    assert.strictEqual(eqObjects(o3, o4), false);
  });
  it("o5 and o6 are equal", () => {
    assert.strictEqual(eqObjects(o5, o6), true);
  });
  it("o5 and o7 are not equal", () => {
    assert.strictEqual(eqObjects(o5, o7), false);
  });
  it("true with recursion", () => {
    assert.strictEqual(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), true);
  });
  it("false with recursion when key val pair is missing from one", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }), false);
  });
  it("false with recursion when object is missing from one", () => {
    assert.strictEqual(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }), false);
  });
});
