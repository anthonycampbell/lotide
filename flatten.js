const eqArrays = function(a1, a2) {
  let l = a2.length;
  if (a1.length > a2.length) l = a1.length;
  for (let i = 0; i < l; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};
const assertArraysEqual = function(a1, a2) {
  let v = eqArrays(a1, a2);
  v ? console.log(`✅✅✅ ${a1} === ${a2}`) : console.log(`🛑🛑🛑 ${a1} !== ${a2}`);
};

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