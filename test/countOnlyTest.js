const countOnly = require('../countOnly');
const assert = require('chai').assert;
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
const result1 = countOnly(firstNames, 
  { 
    "Jason": true,
    "Karima": true,
    "Fang": true,
    "Agouhanna": false 
  });

describe("#countOnly", () => {
  it("returns 1 for 'jason' which is true in itemsToCount object", () => {
    assert.strictEqual(result1["Jason"], 1);
  });
  it("returns undefined for false value in itemsToCount object", () => {
    assert.strictEqual(result1["Karima"], undefined); 
  });
  it("returns 2 for 'fang' which is true in itemsToCount object", () => {
    assert.strictEqual(result1["Fang"], 2); 
  });
  it("returns undefined for value not in itemsToCount object", () => {
    assert.strictEqual(result1["Agouhanna"], undefined); 
  });
});