const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(str) {
  let r = {};
  for (c of str) {
    r[c] ? r[c]++ : r[c] = 1;
  }
  return r;
};