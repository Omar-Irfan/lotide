const assertEqual = require('../assertEqual');
const tail = require('../tail')

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
