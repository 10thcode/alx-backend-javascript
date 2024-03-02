const { expect } = require('chai');
const request = require('request');

describe('test api', function () {
  it('test /cart/:id endpoint', (done) => {
    request.get('http://localhost:7865/cart/12 with int', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('test /cart/:id endpoint with str', (done) => {
    request.get('http://localhost:7865/cart/error', (error, response, body) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('test / endpoint', function (done) {
    request.get('http://localhost:7865/', (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
