const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./4-payment');

describe('Payment Tests', function() {
    it('should call Utils.calculateNumber and log the total', function() {
        const consoleSpy = sinon.spy(console, 'log');
        const stub = sinon.stub(Utils, 'calculateNumber').returns(10);

        sendPaymentRequestToApi(100, 20);

        expect(stub.calledWith('SUM', 100, 20)).to.be.true;
	expect(stub.callCount).to.equal(1);
        expect(consoleSpy.calledWith('The total is: 10')).to.be.true;
        expect(consoleSpy.callCount).to.equal(1);
        stub.restore();
        consoleSpy.restore();
    });
});
