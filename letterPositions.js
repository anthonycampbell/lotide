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
const letterPositions = function(s) {
  const r = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      r[s[i]] ? r[s[i]].push(i) : r[s[i]] = [i];
    }
  }
  return r;
};
let result = letterPositions('hello my friend');
assertArraysEqual(result['h'], [0]);
assertArraysEqual(result['l'], [2, 3]);
//assertArraysEqual(result[' '], undefined);