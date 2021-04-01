const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫️🚫️🚫️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key in object){
    if (callback(object[key])) {
      return key
    }
  }
}

const result = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);
console.log(result)
assertEqual(result, "noma");

family = {
  Omar: 3,
  Ahsan: "3",
  Taimur: "Three",
}
const result2 = findKey(family, x => x === "3");

assertEqual(result2, "Ahsan" )