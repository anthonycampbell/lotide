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

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const data3 = ["I've", "been", "to", "Hollywood", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
const results3 = takeUntil(data3, x => x === ',');
console.log(results2);
console.log(results3);