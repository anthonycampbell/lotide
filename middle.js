const middle = function(array) {
  let r = [];
  let floor = Math.floor(array.length / 2);
  let ceil = Math.ceil(array.length / 2);
  if (array.length < 3) return r;
  if (floor === ceil) {
    r.push(array[floor - 1]);
    r.push(array[floor]);
  } else {
    r.push(array[floor]);
  }
  return r;
};
module.exports = middle;