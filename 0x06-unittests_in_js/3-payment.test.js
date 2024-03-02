const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./3-payment.js');
const Utils = require('./utils.js');

describe('test sendPaymentRequestToApi function', function () {
  it('test with spy', function () {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(5, 1);
    expect(spy.returnValues[0]).to.equal(6);
  });
});
