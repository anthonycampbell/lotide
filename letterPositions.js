const letterPositions = function(s) {
  const r = {};
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      r[s[i]] ? r[s[i]].push(i) : r[s[i]] = [i];
    }
  }
  return r;
};
module.exports = letterPositions;