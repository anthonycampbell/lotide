const eqArrays = require('./assertArraysEqual').eqArrays;
const eqObjects = function(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let k of Object.keys(o1)) {
    if (Array.isArray(o2[k]) && Array.isArray(o1[k])) {
      let isArrEqual = eqArrays(o1[k], o2[k]);
      if (!isArrEqual) return false;
    } else if (o2[k] !== o1[k]) {
      return false;
    }
  }
  return true;
};
const assertObjectsEqual = function(o1, o2) {
  const inspect = require('util').inspect;
  eqObjects(o1, o2) ?
    console.log(`✅✅✅ ${inspect(o1)} === ${inspect(o2)}`) :
    console.log(`🛑🛑🛑 ${inspect(o1)} !== ${inspect(o2)}`);
};
assertObjectsEqual({ k1: 'v1', k2: 'v2'}, { k2: 'v2', k1: 'v1'});