const request = require('request');
const { expect } = require('chai');

describe('Cart API Integration Tests', function() {
    const host = 'http://localhost:7865';

    it('should return welcome message', function(done) {
        request.get(`${host}/`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });

    it('should return correct id for a valid number', function(done) {
        request.get(`${host}/cart/10`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 10');
            done();
        });
    });

    it('should return 404 for a negative number', function(done) {
        request.get(`${host}/cart/-5`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it('should return 404 for a non-numeric id', function(done) {
        request.get(`${host}/cart/hfh4551`, (err, res, body) => {
            expect(res.statusCode).to.equal(404);
            done();
        });
    });

    it('should return valid response for login', function(done) {
         request.post(`${host}/login`, {json: {userName: 'Pooh'}}, (_err, res, body) => {
         expect(res.statusCode).to.be.equal(200);
         expect(body).to.be.equal('Welcome : Pooh');
         done();
    });
});

    it('should return correct payment methods', function(done) {
        request.get(`${host}/available_payments`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(JSON.parse(body))
        .to.be.deep.equal({payment_methods: {credit_cards: true, paypal: false}});
      done();
    });
  });
});
