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
});
