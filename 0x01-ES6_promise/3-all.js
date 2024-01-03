import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const arr = [];
  uploadPhoto().then((body) => {
    arr.push(body.body);
    return createUser();
  }).then((name) => {
    arr.push(name.firstName, name.lastName);
    console.log(arr.join(' '));
  }).catch(() => {
    console.log('Signup system offline');
  });
}
