function getResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const code = 200;
      const body = 'success';
      resolve({ code, body });
    } else {
      reject(new Error("The fake API is not working currently"));
    }
  });
}

export default getResponseFromAPI;
