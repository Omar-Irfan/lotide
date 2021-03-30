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

console.log(assertArraysEqual([1,2,3],[1,2,3]));
console.log(assertArraysEqual(["Omar", "Is"],["Omar", "Is"]));
console.log(assertArraysEqual([1,2,"3"],[1,2,3]));
console.log(assertArraysEqual([1,2,3],[3,2,1]));
console.log(assertArraysEqual([1,2,3],["one",2,"three"]));