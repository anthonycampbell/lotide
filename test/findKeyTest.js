const findKey = require('../findKey');
const assert = require('chai').assert;
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
describe("#findKey", () => {
  it("return key comedy for value brooklyn nine-nine", () => {
    assert.strictEqual(findKey(bestTVShowsByGenre, x => x === "Brooklyn Nine-Nine"), 'comedy');
  });
  it("return key noma for object with value object where key stars has value 2", () => {
    assert.strictEqual(findKey({
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      "noma": { stars: 2 },
      "elBulli": { stars: 3 },
      "Ora": { stars: 2 },
      "Akelarre": { stars: 3 }
    }, x => x.stars === 2), 'noma');
  });
});