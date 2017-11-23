import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

var app = firebase.initializeApp({
  apiKey: "AIzaSyD4p1zT5r_NIY-jIyOOJvb9om1g0R8a7Rw",
  authDomain: "catch-of-the-day-7f.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-7f.firebaseio.com",
  projectId: 'catch-of-the-day-7f'
});

var db = firebase.database(app);
var base = Rebase.createClass(db);

export { base, app };
