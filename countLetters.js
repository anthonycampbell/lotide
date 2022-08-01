const countLetters = function(str) {
  let r = {};
  for (let c of str) {
    r[c] ? r[c]++ : r[c] = 1;
  }
  return r;
};
module.exports = countLetters;