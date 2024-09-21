const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('Payment Tests', function() {
    it('should call the function', function() {
	const spy = sinon.spy(console);
        const stubs = sinon.spy(Utils, 'calculateNumber').returns(10);
        sendPaymentRequestToApi(100, 20);
        expect(stubs.calledWith('SUM', 100, 20)).to.be.true;
        expect(stubs.callcount).to.equal(1);
	expect(spy.log.calledWith('The total is: 10')).to.be.true;
        expect(spy.log.callCount).to.equal(1);
	spy.restore();
	stubs.restore();
    });
});
