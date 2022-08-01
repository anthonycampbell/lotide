const eqArrays = function(a1, a2) {
  let l = a1.length;
  if (l !== a2.length) return false;
  for (let i = 0; i < l; i++) {
    if (Array.isArray(a1[i]) && Array.isArray(a2[i])) {
      if (!eqArrays(a1[i], a2[i])) return false;
    } else if (a1[i] !== a2[i]) return false;
  }
  return true;
};
module.exports = eqArrays;