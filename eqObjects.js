const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫️🚫️🚫️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const eqObjects = function(object1, object2) {
  let objLength1 = Object.keys(object1).length;
  let objLength2 = Object.keys(object2).length;
  if (objLength1 !== objLength2) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key])) {
      if (!eqArrays(object1[key],object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

const ab = { a: "1", b: "2" };
const ba = { b: "1", a: "2" };
assertEqual(eqObjects(ab, ba), false);
const abc = { a: "1", b: "2", c: "3" };
assertEqual(eqObjects(ab, abc), false);
const family = {omar: 23 , taimur: 31, ahsan: 35};
const bros = {ahsan: 35 , taimur: 31, omar: 23};
assertEqual(eqObjects(family, bros), true);
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true);
const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false);