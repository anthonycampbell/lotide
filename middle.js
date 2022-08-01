const assertArraysEqual = require('./assertArraysEqual');
const middle = function(array) {
  let r = [];
  let floor = Math.floor(array.length / 2);
  let ceil = Math.ceil(array.length / 2);
  if (array.length < 3) return r;
  if (floor === ceil) {
    r.push(array[floor - 1]);
    r.push(array[floor]);
  } else {
    r.push(array[floor]);
  }
  return r;
};

assertArraysEqual(middle([1]), []); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);// => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); // => [3, 4]