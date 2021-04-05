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
module.exports = middle