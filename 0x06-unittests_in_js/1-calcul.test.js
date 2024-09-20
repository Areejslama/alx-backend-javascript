const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function() {
	it('should return rounded number', function() {
		const result = calculateNumber('SUM', 1.4, 4.5);
		assert.strictEqual(result, 6);
	});
        
	it('should return rounded number', function() {
                const result = calculateNumber('SUBTRACT', 1.4, 4.5);
                assert.strictEqual(result, -4);
	});
        
	it('should return rounded number', function() {
                const result = calculateNumber('DIVIDE', 1.4, 4.5);
                assert.strictEqual(result, 0.2);
	});

	it('should return rounded number', function() {
                const result = calculateNumber('DIVIDE', 1.4, 0);
                assert.strictEqual(result, 'Error');
	});

	 it('should return rounded number', function() {
                const result = calculateNumber('SUM', -1.4, -2.6);
                assert.strictEqual(result, -4);
	});
});
