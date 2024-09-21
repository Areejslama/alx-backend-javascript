const request = require('request');
const { expect } = require('chai');

describe('Basic Integration testing', function() {
    it('should return welcome message', function(done) {
        const host = 'http://localhost:7865';
        request.get(`${host}/`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Welcome to the payment system');
            done();
        });
    });
});

it('should return correct id', function(done) {
        request.get(`${host}/cart/10`, (err, res, body) => {
            expect(res.statusCode).to.equal(200);
            expect(body).to.equal('Payment methods for cart 10');
	    done();
    });
});

it('should return correct id', function(done) {
        request.get(`${host}/cart/-5`, (err, res, body) => {
		expect(res.statusCode).to.equal(404);
		done();
});
});

it('should return correct id', function(done) {
        request.get(`${host}/cart/hfh4551`, (err, res, body) => {
                expect(res.statusCode).to.equal(404);
                done();
});
});
