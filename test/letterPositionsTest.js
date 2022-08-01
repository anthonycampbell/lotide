const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

let result = letterPositions('hello my friend');
describe("#letterPositions", () => {
  it("return position 0 for letter h", () => {
    assert.deepEqual(result['h'], [0]);
  });
  it("return list of l values for position of l", () => {
    assert.deepEqual(result['l'], [2, 3]);
  });
});