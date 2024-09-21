const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');


describe('sendPaymentRequestToAPI', function() {
	beforeEach(function() {
		spy = sinon.spy(console, 'log');
    });

    afterEach(function() {
        spy.restore();
    });

    it('should log the total correctly', function() {
        sendPaymentRequestToApi(100, 20);

        expect(spy.calledWith('The total is: 10')).to.be.true;
        expect(spy.calledOnce).to.be.true;
	
	 sendPaymentRequestToApi(10, 10);
	 expect(spy.calledWith('The total is: 20')).to.be.true;
	 expect(spy.calledOnce).to.be.true;
    });
});
