const chai = require('chai');
const expect = chai.expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', function() {
        it('should return rounded number', function() {
                const result = calculateNumber('SUM', 1.4, 4.5);
                expect(result).to.equal(6);
        });

        it('should return rounded number', function() {
                const result = calculateNumber('SUBTRACT', 1.4, 4.5);
                expect(result).to.equal(-4);
        });

        it('should return rounded number', function() {
                const result = calculateNumber('DIVIDE', 1.4, 4.5);
                expect(result).to.equal(0.2);
        });

        it('should return rounded number', function() {
                const result = calculateNumber('DIVIDE', 1.4, 0);
                expect(result).to.equal('Error');
        });

         it('should return rounded number', function() {
                const result = calculateNumber('SUM', -1.4, -2.6);
                expect(result).to.equal(-4);
        });
});
