const assertEqual = require('./assertEqual');
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  let r = {};
  for (let i = 0; i < allItems.length; i++) {
    if (r[allItems[i]]) {
      r[allItems[i]]++;
    } else if (itemsToCount[allItems[i]]) {
      r[allItems[i]] = 1;
    }
  }
  return r;
};

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

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);