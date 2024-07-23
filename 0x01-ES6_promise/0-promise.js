const promise = new promise(function(getResponseFromAPI) {
let i = 0;
	if (i == 0) {
		getResponseFromAPI("true");
	}
	else {
		getResponseFromAPI("false")
	}
};
