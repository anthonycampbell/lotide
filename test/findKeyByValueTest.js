const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;
const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
describe("#findKeyByValue", () => {
  it("return key dram for value The Wire", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), 'drama');
  });
  it("return key undefined for value That 70s Show", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "That 70s Show"), undefined);
  });
});