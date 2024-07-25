function signUpUser(firstName, lastName) {
  return new Promise((resolve) => {
    if (firstName && lastName) {
      const name = {
        firstName,
        lastName,
      };
      resolve(name);
    }
  });
}

export default signUpUser;
