const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function() {
	it('should return rounded number', function() {
		const result = calculateNumber(1, 3);
		assert.strictEqual(result, 4);
	});
        
	it('should return rounded number', function() {
                const result = calculateNumber(1, 3.7);
                assert.strictEqual(result, 5);
	});
        
	it('should return rounded number', function() {
                const result = calculateNumber(1.2, 3.7);
                assert.strictEqual(result, 5);
	});

	it('should return rounded number', function() {
                const result = calculateNumber(1.5, 3.7);
                assert.strictEqual(result, 6);
	});

	 it('should return rounded number', function() {
                const result = calculateNumber(-1.4, -2.6);
                assert.strictEqual(result, -4);
	});
});
