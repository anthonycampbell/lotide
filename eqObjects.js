const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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
      if (!eqArrays(o1[k], o2[k])) return false;
    } else if (typeof o2[k] === 'object' && typeof o1[k] === 'object') {
      if (!eqObjects(o1[k], o2[k])) return false;
    } else if (o2[k] !== o1[k]) {
      return false;
    }
  }
  return true;
};

const o1 = { k1: "v1", k2: "v2" };
const o2 = { k1: "v1", k2: "v2" };
const o3 = { k3: "v2", k2: "v2" };
const o4 = { k1: "v1", k2: "v2", k3: "v3" };
const o5 = { k4: "1", k5: ["2", 3] };
const o6 = { k5: ["2", 3], k4: "1" };
const o7 = { k4: "1", k5: ["2", 3, 4] };
assertEqual(eqObjects(o1,o2), true);
assertEqual(eqObjects(o2,o3), false);
assertEqual(eqObjects(o3,o4), false);
assertEqual(eqObjects(o5,o6), true);
assertEqual(eqObjects(o5,o7), false);
console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false