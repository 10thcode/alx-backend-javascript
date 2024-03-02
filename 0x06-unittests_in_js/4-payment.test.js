const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToApi = require('./4-payment');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  it('sendPaymentRequestToApi(100, 20) returns The total is: 10', function () {
    const stub = sinon.stub(Utils, 'calculateNumber').returns(10);
    const spy = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);
    expect(stub.firstCall.args).to.eql(['SUM', 100, 20]);
    expect(spy.calledWith('The total is: 10')).to.be.true;
    spy.restore();
    stub.restore();
  });
});
