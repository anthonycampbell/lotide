const eqArrays = function(a1, a2) {
  let l = a2.length;
  if (a1.length > a2.length) l = a1.length;
  for (let i = 0; i < l; i++) {
    if (a1[i] !== a2[i]) return false;
  }
  return true;
};
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