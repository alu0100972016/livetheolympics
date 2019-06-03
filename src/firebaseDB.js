import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDdzEEqw3efYkfg0OapZPVTAbEVtEsly98",
  authDomain: "livetheolympics.firebaseapp.com",
  databaseURL: "https://livetheolympics.firebaseio.com",
  projectId: "livetheolympics",
  storageBucket: "livetheolympics.appspot.com",
  messagingSenderId: "157730914443",
  appId: "1:157730914443:web:41457f6994ddf7a1"
};
firebase.initializeApp(firebaseConfig);

export const firebaseDB = firebase.firestore();
