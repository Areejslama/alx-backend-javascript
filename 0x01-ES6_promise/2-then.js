function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      const result = {
        status: 200,
        body: 'Success',
      };
      return result;
    })
    .catch(() => {
      console.log('Got a response from the API');
      return {};
    });
}

export default handleResponseFromAPI;
