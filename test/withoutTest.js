const without = require('../without');
const assert = require('chai').assert;

describe("#without", () => {
  it("values in second array are missing from first", () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2,3]);
  });
  it("values in second array are missing from first with different types", () => {
    assert.deepEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1","2"]);
  });
  it("array is not mutated", () => {
    const words = ["hello", "world", "lighthouse"];
    without(words, ["lighthouse"]);
    assert.deepEqual(words, ["hello", "world", "lighthouse"]);
  });
});
