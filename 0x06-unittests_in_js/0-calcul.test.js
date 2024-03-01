const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe("calculateNumber", function () {
  it("testRound", function () {
    assert.equal(2, calculateNumber(1.4, 1.4));
  });

  it("testRound2", function () {
    assert.equal(4, calculateNumber(1, 3));
  });

  it("testRound3", function () {
    assert.equal(5, calculateNumber(1, 3.7));
  });

  it("testRound4", function () {
    assert.equal(5, calculateNumber(1.2, 3.7));
  });

  it("testRound4", function () {
    assert.equal(6, calculateNumber(1.5, 3.7));
  });
});
