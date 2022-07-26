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

const without = function(arr, rArr) {
  let removes = {};
  let finished = [];
  for (let i = 0; i < rArr.length; i++) {
    removes[rArr[i]] = rArr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (removes[arr[i]] !== arr[i]) {
      finished.push(arr[i]);
    }
  }
  return finished;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);