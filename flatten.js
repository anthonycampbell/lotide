const flatten = function(a) {
  let r = [];
  for (let i = 0; i < a.length; i++) {
    if (Array.isArray(a[i])) {
      for (let j = 0; j < a[i].length; j++) {
        r.push(a[i][j]);
      }
    } else {
      r.push(a[i]);
    }
  }
  return r;
};
module.exports = flatten;