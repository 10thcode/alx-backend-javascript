const { expect } = require('chai');
const sinon = require('sinon');
const sendPaymentRequestToAPI = require('./5-payment')

describe('test sendPaymentRequestToAPI function', function () {
    let spy;

    beforeEach(() => {
      spy = sinon.spy(console, 'log');
    });

    it('test with 100 and 20', function () {
      sendPaymentRequestToAPI(100, 20);
      expect(spy.calledWith('The total is: 120')).to.be.true;
    });

    it('test with 10 and 10', function () {
      sendPaymentRequestToAPI(10, 10);
      expect(spy.calledWith('The total is: 20')).to.be.true;
    });

    afterEach(() => {
      spy.restore();
    });
});
