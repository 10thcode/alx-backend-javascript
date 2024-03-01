const calculateNumber = require('./2-calcul_chai.js');
const { expect } = require('chai');

describe("testSum", function () {
  it("test with real numbers", function () {
    expect(calculateNumber('SUM', 3, 3)).to.equal(6);
  });

  it("test with floating numbers", function () {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it("test with both real and floating numbers", function () {
    expect(calculateNumber('SUM', 1, 4.5)).to.equal(6);
  });
});

describe("testSubtract", function () {
  it("test with real numbers", function () {
    expect(calculateNumber('SUBTRACT', 3, 3)).to.equal(0);
  });

  it("test with floating numbers", function () {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it("test with both real and floating numbers", function () {
    expect(calculateNumber('SUBTRACT', 1, 4.5)).to.equal(-4);
  });
});

describe("testDivide", function () {
  it("test with real numbers", function () {
    expect(calculateNumber('DIVIDE', 3, 3)).to.equal(1);
  });

  it("test with floating numbers", function () {
    expect(calculateNumber('DIVIDE', 5.5, 1.6)).to.equal(3);
  });

  it("test with 0", function () {
    expect(calculateNumber('DIVIDE', 4, 0)).to.equal("Error");
  });
});
