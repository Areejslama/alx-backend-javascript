const sinon = require('sinon');
const Utils = require('./utils');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./3-payment');

describe('Payment Tests', function() {
    it('should call the function', function() {
        const spy = sinon.spy(Utils, 'calculateNumber');
        sendPaymentRequestToApi(100, 20);
        expect(spy.calledWith('SUM', 100, 20)).to.be.true;
        expect(spy.callCount).to.equal(1);
        spy.calculateNumber.restore();
    });
}); 
