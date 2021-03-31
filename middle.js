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

const middle = function(array) {
  let midIndex = (array.length - 1) / 2;
  let midElements = [];
  if (midIndex === 0) {
    midElements = [];
  } else if (Number.isInteger(midIndex)) {
    midElements = [array[midIndex]];
  } else {
    let lowerIndex = Math.floor(midIndex);
    let higherIndex = Math.ceil(midIndex);
    let lowestVal = array[lowerIndex];
    let highestVal = array[higherIndex];
    midElements =  [lowestVal, highestVal];

  }
  return midElements;
};

assertArraysEqual(middle([1,2,3,4]), [2,3]);
assertArraysEqual(middle([1,2,3,4,5,6]), [3,4]);
assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1,2,3,4,5]), [3]);
assertArraysEqual(middle([1]), []);