import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';


const config = {
  apiKey: 'AIzaSyDFpPswsDZpLflpw0IXo1k2p2NCo-tI6UQ',
  authDomain: 'react-login-app-615cb.firebaseapp.com',
  databaseURL: 'https://react-login-app-615cb.firebaseio.com',
  projectId: 'react-login-app-615cb',
  storageBucket: 'react-login-app-615cb.appspot.com',
  messagingSenderId: '589015215493',
};

class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
    this.db = app.database();
  }

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  user = uid => this.db.ref(`users/${uid}`);
  users = () => this.db.ref('users');
}
export default Firebase;
