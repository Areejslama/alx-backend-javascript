import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export function handleProfileSignup(firstName, lastName, fileName) {
  const user = signUpUser(firstName, lastName);
  const file = uploadPhoto(fileName);
  const promises = [user, file];

  return Promise.allSettled(promises)
    .then((results) => results.map((result) => ({
      status: results.status,
      value: results.value || results.error,
    })));
}

export default handleProfileSignup;
