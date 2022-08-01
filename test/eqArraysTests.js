const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for eqArrays([1,2,3], [1,2,3])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false for eqArrays([1,2,3], [3,2,1])", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); 
  });
  it("returns false for eqArrays([1,2], [1,2,1])", () => {
    assert.strictEqual(eqArrays([1, 2], [1, 2, 1]), false); 
  });
  it("returns false for eqArrays([1,2,1], [1,2])", () => {
    assert.strictEqual(eqArrays([1, 2, 1], [1, 2]), false); 
  });
  it("returns true for eqArrays([[2,3], [4]],[[2,3], [4]])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true); 
  });
  it("returns false for eqArrays([[2, 3], [4]], [[2, 3], [4, 5])", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]), false); 
  });
  it("returns false for eqArrays([[2, 3], [4]], [[2, 3], 4)", () => {
    assert.strictEqual(eqArrays([[2, 3], [4]], [[2, 3], 4]), false); 
  });
});