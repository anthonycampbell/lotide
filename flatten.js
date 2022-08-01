const assertArraysEqual = require('./assertArraysEqual');
const flatten = function(a) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      for (let j = 0; j < a[i].length; j++) {
        r.push(a[i][j]);
      }
    } else {
      r.push(a[i]);
    }
  }
  return r;
};

let a1 = [[1, 2, 3], 4, 5, 6, [7, 8], 9];
let a2 = flatten(a1);
assertArraysEqual(a2, [1, 2, 3, 4, 5, 6, 7, 8, 9]);