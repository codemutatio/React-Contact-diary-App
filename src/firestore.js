import firebase from 'firebase/app';
import 'firebase/database';
import config from './config';

export default firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseContacts = firebaseDB.ref('contacts');

export { firebase, firebaseDB, firebaseContacts };
