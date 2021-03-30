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

/* input: source array and items to remove
output: new array = source - items to remove
initilize new array (empty)
loop through source array and remove any items that are shared between the two

*/



const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  } return newArray;
};

console.log(without([1,1,2,2,3,3],[1,2,3]));
const array1 = without([1, 2, 3], [1]);
console.log(array1);
console.log(assertArraysEqual(array1, [2,3]));
const array2 = without(["1", "2", "3"], [1, 2, "3"]);
console.log(array2);
console.log(assertArraysEqual(array2, ['1','2']));
const words = ["hello", "world", "lighthouse"];
const array3 = without(words, ["lighthouse"]);
console.log(array3);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
assertArraysEqual(words, array3);


