const { expect } = require('chai');
const request = require('request');

describe('test api', function () {
  it('test / endpoint', function (done) {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
