const findKeyByValue = function(o, v) {
  for (let k of Object.keys(o)) {
    if (o[k] === v) return k;
  }
};
module.exports = findKeyByValue;