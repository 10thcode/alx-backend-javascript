const calculateNumber = require('./1-calcul.js');
const assert = require("assert");

describe("testSum", function () {
  it("test with real numbers", function () {
    assert.equal(6, calculateNumber('SUM', 3, 3))
  });

  it("test with floating numbers", function () {
    assert.equal(6, calculateNumber('SUM', 1.4, 4.5))
  });

  it("test with both real and floating numbers", function () {
    assert.equal(6, calculateNumber('SUM', 1, 4.5))
  });
});

describe("testSubtract", function () {
  it("test with real numbers", function () {
    assert.equal(0, calculateNumber('SUBTRACT', 3, 3))
  });

  it("test with floating numbers", function () {
    assert.equal(-4, calculateNumber('SUBTRACT', 1.4, 4.5))
  });

  it("test with both real and floating numbers", function () {
    assert.equal(-4, calculateNumber('SUBTRACT', 1, 4.5))
  });
});

describe("testDivide", function () {
  it("test with real numbers", function () {
    assert.equal(1, calculateNumber('DIVIDE', 3, 3))
  });

  it("test with floating numbers", function () {
    assert.equal(3, calculateNumber('DIVIDE', 5.5, 1.6))
  });

  it("test with 0", function () {
    assert.equal("Error", calculateNumber('DIVIDE', 4, 0))
  });
});
