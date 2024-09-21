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
