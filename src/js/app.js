const firebaseConfig = {
    apiKey: " ",
    authDomain: ".firebaseapp.com",
    databaseURL: "https://.firebaseio.com",
    projectId: "",
    storageBucket: ".appspot.com",
    messagingSenderId: " ",
    appId: "",
    measurementId: "G-LZS9HLK6PQ"
  };

  // Initialize Firebase
  const app = firebase.initializeApp(firebaseConfig);

  // Firebase Database Reference and the child
const dbRef = firebase.database().ref();
const prodRef = dbRef.child('prod');

