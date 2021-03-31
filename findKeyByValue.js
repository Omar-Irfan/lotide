const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫️🚫️🚫️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key in object) {
    if (object[key] === value) {
      return key;
    }
  } return undefined;
};
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

const Manga = {
  dragonBall: "Akira Toriyama",
  onePiece: "Eiichiro Oda",
};

assertEqual(findKeyByValue(Manga, "Akira Toriyama"), "dragonBall");
assertEqual(findKeyByValue(Manga, "Eiichiro Oda"), "onePiece");