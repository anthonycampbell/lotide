const assertObjectsEqual = require('../assertObjectsEqual');
assertObjectsEqual({ k1: 'v1', k2: 'v2'}, { k2: 'v2', k1: 'v1'});