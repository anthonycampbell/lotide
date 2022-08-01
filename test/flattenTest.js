const flatten = require('../flatten');
const assert = require('chai').assert;
let a1 = [[1, 2, 3], 4, 5, 6, [7, 8], 9];
let a2 = flatten(a1);
describe("#flatten", () => {
  it("return flattened array", () => {
    assert.deepEqual(a2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  });
});