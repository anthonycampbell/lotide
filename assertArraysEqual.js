const eqArrays = require('./eqArrays');
const assertArraysEqual = function(a1, a2) {
  let v = eqArrays(a1, a2);
  v ? console.log(`✅✅✅ ${a1} === ${a2}`) : console.log(`🛑🛑🛑 ${a1} !== ${a2}`);
};

module.exports = assertArraysEqual;