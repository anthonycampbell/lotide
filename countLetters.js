const assertEqual = require('./assertEqual');
const countOnly = function(str) {
  let r = {};
  for (let c of str) {
    r[c] ? r[c]++ : r[c] = 1;
  }
  return r;
};
assertEqual(countOnly('aaabcd')['a'], 3);
assertEqual(countOnly('aaabcd')['b'], 1);
assertEqual(countOnly('aaabcd')['c'], 1);
assertEqual(countOnly('aaabcd')['d'], 1);