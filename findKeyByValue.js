const assertEqual = require('./assertEqual');
const findKeyByValue = function(o, v) {
  for (let k of Object.keys(o)) {
    if (o[k] === v) return k;
  }
};

const bestTVShowsByGenre = {
  scifi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);