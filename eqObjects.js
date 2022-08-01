const eqArrays = require('./eqArrays');
const eqObjects = function(o1, o2) {
  if (Object.keys(o1).length !== Object.keys(o2).length) return false;
  for (let k of Object.keys(o1)) {
    if (Array.isArray(o2[k]) && Array.isArray(o1[k])) {
      if (!eqArrays(o1[k], o2[k])) return false;
    } else if (typeof o2[k] === 'object' && typeof o1[k] === 'object') {
      if (!eqObjects(o1[k], o2[k])) return false;
    } else if (o2[k] !== o1[k]) {
      return false;
    }
  }
  return true;
};
module.exports = eqObjects;