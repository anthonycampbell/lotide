const takeUntil = function(array, callback) {
  let r = [];
  for (let a of array) {
    if (!callback(a)) {
      r.push(a);
    } else {
      return r;
    }
  }
  return r;
};
module.exports = takeUntil;