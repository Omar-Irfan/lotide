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

const flatten = function(array) {
  let flattenedArray = [];
  for (let i = 0; i < array.length; i++) {
    if (Array.isArray(array[i])) {
      let arrayWithin = array[i];
      for (let j = 0; j < arrayWithin.length; j++) {
        let flatElement = Number(arrayWithin[j].toString());
        flattenedArray.push(flatElement);
      }
    } else {
      flattenedArray.push(array[i]);
    }
  } return flattenedArray;
};
console.log(flatten([1, 2, [3, 4], 5, [6]]));