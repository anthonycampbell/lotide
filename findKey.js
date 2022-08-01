const findKey = (obj, c) => {
  let r = null;
  Object.keys(obj).forEach(k => c(obj[k]) && r === null ? r = k : null);
  return r;
};
module.exports = findKey;