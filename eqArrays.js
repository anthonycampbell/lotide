const assertEqual = require('./assertEqual');
const eqArrays = function(a1, a2) {
  let l = a1.length;
  if (l !== a2.length) return false;
  for (let i = 0; i < l; i++) {
    if (Array.isArray(a1[i]) && Array.isArray(a2[i])) {
      if (!eqArrays(a1[i], a2[i])) return false;
    } else if (a1[i] !== a2[i]) return false;
  }
  return true;
};
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays([1, 2], [1, 2, 1]), false);
assertEqual(eqArrays([1, 2, 1], [1, 2]), false);
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])); // => false