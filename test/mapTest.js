const map = require('../map');
const assert = require('chai').assert;
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
describe("#map", () => {
  it("return empty list for mapping empty list", () => {
    assert.deepEqual(map([], () => { }), []);
  });
  it("return list multiplied by two", () => {
    assert.deepEqual(map([1, 2, 3], e => e * 2), [2, 4, 6]);
  });
  it("return list with y appended to each element", () => {
    assert.deepEqual(map(['a', 'b', 'c'], e => e + 'y'), ['ay', 'by', 'cy']);
  });
  it("return first letter of each str", () => {
    assert.deepEqual(results1, ['g','c','t','m','t']);
  });
});