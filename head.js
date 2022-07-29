const assertEqual = require('./assertEqual');
const head = function(a) {
  return a[0];
};
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);