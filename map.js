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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const words = ["ground", "control", "to", "major", "tom"];
const numbers = [1,2,3,4,5];
const numStr = [ "1","2","3"]
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ["g","c","t","m","t"]);
const results2 = map(numbers, number => number*5);
assertArraysEqual(results2, [5,10,15,20,25]);
const results3 = map(numStr, str => Number(str));
assertArraysEqual(results3, [1,2,3])