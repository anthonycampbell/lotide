const takeUntil = require('../takeUntil');
const assert = require('chai').assert;

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["I've", "been", "to", "Hollywood", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data3, x => x === ',');

describe("#takeUntil", () => {
  it("return list of everything before negative value", () => {
    assert.deepEqual(results1, [1, 2, 5, 7, 2]);
  });
  it("return list of everything before comma character", () => {
    assert.deepEqual(results2, ["I've", "been", "to", "Hollywood"]);
  });
  it("return entire list if no comma is encountered", () => {
    assert.deepEqual(results3, ["I've", "been", "to", "Hollywood", "I've", "been", "to", "Redwood"]);
  });
});
