function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      const Result = {
        status: 200,
        body: 'Success',
      };
      return Result;
    })
    .catch((error) => {
      console.log('Error:', error);
      const errorr = {
        status: 500,
        body: 'Error',
      };
      return errorr;
    });
}

export default handleResponseFromAPI;
