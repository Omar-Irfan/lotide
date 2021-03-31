const eqArrays = function(array1, array2) {
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] !== array2[i]) {
        return false;
      }
    } return true;
  } else {
    return false;
  }

};

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected) === true) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫️🚫️🚫️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(str) {
  str = str.toLowerCase();
  const letters = {};
  for (let i = 0; i < str.length; i++) {
    if (letters[str[i]]) {
      letters[str[i]].push(i);
    } else {
      letters[str[i]] = [i];
    }
  } return letters;
};

assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("Omar").o, [0]);
assertArraysEqual(letterPositions("Lighthouse rocks").o, [6, 12]);