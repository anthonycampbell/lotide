const assertArraysEqual = require('./assertArraysEqual').assertArraysEqual;
const letterPositions = function(s) {
  const r = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      r[s[i]] ? r[s[i]].push(i) : r[s[i]] = [i];
    }
  }
  return r;
};
let result = letterPositions('hello my friend');
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['l'], [2, 3]);
//assertArraysEqual(result[' '], undefined);