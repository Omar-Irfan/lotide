const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅️✅️✅️ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🚫️🚫️🚫️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const noSpaces = str.split(" ").join("");
  const lowerCase = noSpaces.toLowerCase();
  const letters = {};
  for (let i = 0; i < lowerCase.length; i++) {
    if (letters[lowerCase[i]]) {
      letters[lowerCase[i]] ++;
    } else {
      letters[lowerCase[i]] = 1;
    }
  } return letters;
};
const lettersObj = countLetters("lighthouse in the house");
console.log(lettersObj);
const numOfH = lettersObj["h"];
const numOfO = lettersObj["o"];
assertEqual(numOfH, 4);
assertEqual(numOfO, 2);
