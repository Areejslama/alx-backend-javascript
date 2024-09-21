const getPaymentTokenFromAPI = require('./6-payment_token');
const assert = require('assert');


describe('async testing waiting for the answer', function() {
	 it('should resolve with a successful response from the API', function(done) {
		 getPaymentTokenFromAPI(true)
			.then((response) => {
			  assert.deepStrictEqual(response, { data: 'Successful response from the API' });
			  done();
	});
	});
});
