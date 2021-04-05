const assert = require('chai').assert;
const middle   = require('../middle');

describe("#middle", () => {
  it("returns [2, 3] for [1,2,3,4]", () => {
    assert.deepEqual([2,3], middle([1,2,3,4]))
  });
  it("returns [3] for [1,2,3,4,5]", () => {
    assert.deepEqual([3], middle([1,2,3,4,5]))
  });
  it("returns [] for [1]", () => {
    assert.deepEqual([], middle([1]))
  });
});