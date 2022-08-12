import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
    apiKey: "AIzaSyDUTnzjKAsgQD32lJpsTZVtI2YbJO26g9c",
    authDomain: "project71-77c79.firebaseapp.com",
    databaseURL: "https://project71-77c79-default-rtdb.firebaseio.com",
    projectId: "project71-77c79",
    storageBucket: "project71-77c79.appspot.com",
    messagingSenderId: "204996743014",
    appId: "1:204996743014:web:fe801164897c56e94e82a7"
  };

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
