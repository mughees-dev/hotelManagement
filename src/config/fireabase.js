import firebase from 'firebase';
import 'firebase/auth'
import 'firebase/database'
var firebaseConfig = {
  apiKey: "AIzaSyBykCAvrwvnJZ9XKFL3GJMVYzAA-3SmXIo",
  authDomain: "mby-hackathon.firebaseapp.com",
  projectId: "mby-hackathon",
  storageBucket: "mby-hackathon.appspot.com",
  messagingSenderId: "924628092198",
  appId: "1:924628092198:web:7725d500194aa09822ade7"
};
// Initialize Firebase
let fireB = firebase.initializeApp(firebaseConfig);
export default fireB;
