const without = function(arr, rArr) {
  let removes = {};
  let finished = [];
  for (let i = 0; i < rArr.length; i++) {
    removes[rArr[i]] = rArr[i];
  }
  for (let i = 0; i < arr.length; i++) {
    if (removes[arr[i]] !== arr[i]) {
      finished.push(arr[i]);
    }
  }
  return finished;
};
module.exports = without;