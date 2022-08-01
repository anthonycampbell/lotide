# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anthonyrc/lotide`

**Require it:**

`const _ = require('@anthonyrc/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(array)`: Return the first value in an array.
* `tail(array)`: Return the rest of the values after the first in an array.
* `middle(array)`: Return the middle value(s) of an array.
* `assertArraysEqual(array, array)`: Print green if two arrays share the same values and red otherwise.
* `assertEqual(primitive, primitive)`: Print green if two primitive values are the same and red otherwise.
* `assertObjectsEqual(obejct, object)`: Print green if two objects keys and values are the same, red otherwise.
* `countLetters(string)`: Return an object with the count of each letter in a string.
* `countOnly(array, object)`: return an object with the count of occurrences of given values that are true.
* `eqArrays(array, array)`: Return true if two arrays share the same values and false otherwise. 
* `eqObjects(object, object)`: Return true if two objects keys and values are the same, false otherwise.
* `findKey(object, primitive)`: Given a value find the key of an object.
* `findKeyByValue(object, callback)`: Given a callback that returns a value to some key return the object with that key.
* `flatten(array)`: Recursively place values of an array into an array where the values are primitives.
* `letterPositions(string)`: Return object of all the positions of of all the letters.
* `map(array, callback)`: Apply function to all elements of array.
* `takeUntil(array, callback)`: Add all elements before an element that doesn't pass the test.
* `without(array, array)`: Return an array without any of the values from the other array.