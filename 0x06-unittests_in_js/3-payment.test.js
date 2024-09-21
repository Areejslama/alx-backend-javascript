const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('Payment Tests', function() {
    it('should call the function', function() {
        const spy = sinon.spy(Utils);
        sendPaymentRequestToApi(100, 20);
        expect(spy.calculateNumber.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.calculateNumber.callCount).to.equal(1);
        spy.calculateNumber.restore();
    });
}); 
