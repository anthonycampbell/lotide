const assertEqual = require('./assertEqual');
const findKey = (obj, c) => {
  let r = null;
  Object.keys(obj).forEach(k => c(obj[k]) && r === null ? r = k : null);
  return r;
};
assertEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 },
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 },
  "Akelarre": { stars: 3 }
}, x => x.stars === 2), 'noma'); // => "noma"
const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
assertEqual(findKey(bestTVShowsByGenre, x => x === "Brooklyn Nine-Nine"), 'comedy'); //