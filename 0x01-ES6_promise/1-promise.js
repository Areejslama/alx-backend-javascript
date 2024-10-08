function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const result = {
        status: 200,
        body: 'Success',
      };
      resolve(result);
    } else {
      reject(Error('The fake API is not working currently'));
    }
  });
}

export default getResponseFromAPI;
