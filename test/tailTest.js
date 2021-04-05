const assert = require('chai').assert;
const tail   = require('../tail');

describe("#tail", () => {
  it("returns [Taimur, Ahsan] for [Omar, Taimur, Ahsan]", () => {
    const brothers = ["Omar", "Taimur", "Ahsan"];
    assert.deepEqual(tail(brothers), ["Taimur", "Ahsan"])
  });
  it("returns [] for [Omar]", () => {
    assert.deepEqual(tail(["Omar"]), [])
  });
  it("returns undefined for []", () => {
    assert.deepEqual(tail([]), [])
  });

});