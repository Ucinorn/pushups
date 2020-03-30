import firebase from 'firebase/app'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyAaPqQfXj_RVbPe8jfBYYF__3ps8xzTydE",
  authDomain: "pushups-f3353.firebaseapp.com",
  databaseURL: "https://pushups-f3353.firebaseio.com",
  projectId: "pushups-f3353",
  storageBucket: "pushups-f3353.appspot.com",
  messagingSenderId: "888979598607",
  appId: "1:888979598607:web:d68dd3dca388d4fce0e27a",
  measurementId: "G-6VZLBCY0RH"
};

firebase.initializeApp(config)
