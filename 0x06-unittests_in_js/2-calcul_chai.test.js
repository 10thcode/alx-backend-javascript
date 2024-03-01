const calculateNumber = require('./2-calcul_chai.js');
const expect = require('chai');

describe("testSum", function () {
  it("test with real numbers", function () {
    expect(calculateNumber('SUM', 3, 3)).to.equal(6);
  });

  it("test with floating numbers", function () {
    expect(6).to.equal(calculateNumber('SUM', 1.4, 4.5));
  });

  it("test with both real and floating numbers", function () {
    expect(6).to.equal(calculateNumber('SUM', 1, 4.5));
  });
});

describe("testSubtract", function () {
  it("test with real numbers", function () {
    expect(0).to.equal(calculateNumber('SUBTRACT', 3, 3));
  });

  it("test with floating numbers", function () {
    expect(-4).to.equal(calculateNumber('SUBTRACT', 1.4, 4.5));
  });

  it("test with both real and floating numbers", function () {
    expect(-4).to.equal(calculateNumber('SUBTRACT', 1, 4.5));
  });
});

describe("testDivide", function () {
  it("test with real numbers", function () {
    expect(1).to.equal(calculateNumber('DIVIDE', 3, 3));
  });

  it("test with floating numbers", function () {
    expect(3).to.equal(calculateNumber('DIVIDE', 5.5, 1.6));
  });

  it("test with 0", function () {
    expect("Error").to.equal(calculateNumber('DIVIDE', 4, 0));
  });
});
