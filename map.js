const assertArraysEqual = require('./assertArraysEqual');
const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};
const results1 = map(words, word => word[0]);
assertArraysEqual(map([], () => { }), []);
assertArraysEqual(map([1, 2, 3], e => e * 2), [2, 4, 6]);
assertArraysEqual(map(['a', 'b', 'c'], e => e + 'y'), ['ay', 'by', 'cy']);
console.log(results1);