const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {
  it("returns 3 for countOnly('aaabcd')['a'])", () => {
    assert.strictEqual(countLetters('aaabcd')['a'], 3);
  });
  it("returns 1 for countOnly('aaabcd')['b']", () => {
    assert.strictEqual(countLetters('aaabcd')['b'], 1); 
  });
  it("returns 1 for countOnly('aaabcd')['c']", () => {
    assert.strictEqual(countLetters('aaabcd')['c'], 1); 
  });
  it("returns 1 for countOnly('aaabcd')['d']", () => {
    assert.strictEqual(countLetters('aaabcd')['d'], 1); 
  });
});