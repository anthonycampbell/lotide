const eqObjects = require('./eqArrays');
const assertObjectsEqual = function(o1, o2) {
  const inspect = require('util').inspect;
  eqObjects(o1, o2) ?
    console.log(`✅✅✅ ${inspect(o1)} === ${inspect(o2)}`) :
    console.log(`🛑🛑🛑 ${inspect(o1)} !== ${inspect(o2)}`);
};
module.exports = eqObjects;