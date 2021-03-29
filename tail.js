const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫️🚫️🚫️ Assertion Failed: ${actual} !== ${expected}`);
  }
};
const tail = function(array) {
  let newArray = array.slice(1);
  return newArray;
};
const brothers = ["Omar", "Taimur", "Ahsan"];
const olderBrothers = tail(brothers);
assertEqual(brothers.length, olderBrothers.length);
assertEqual(olderBrothers.length,2);
assertEqual(olderBrothers[0], "Taimur");
assertEqual(olderBrothers[1], "Ahsan");

tail(brothers);
assertEqual(brothers.length, 3);

console.log(tail([1]));
console.log(tail([]));
