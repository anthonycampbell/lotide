const countOnly = function(allItems, itemsToCount) {
  let r = {};
  for (let i = 0; i < allItems.length; i++) {
    if (r[allItems[i]]) {
      r[allItems[i]]++;
    } else if (itemsToCount[allItems[i]]) {
      r[allItems[i]] = 1;
    }
  }
  return r;
};

module.exports = countOnly;