import * as firebase from "firebase/compat"

const firebaseConfig = {
    apiKey: "AIzaSyDyRUY8khFssY_z3xu-qdC7e0oayOWVZv4",
    authDomain: "solsysx.firebaseapp.com",
    projectId: "solsysx",
    storageBucket: "solsysx.appspot.com",
    messagingSenderId: "560075258688",
    appId: "1:560075258688:web:7c822741adfbe248a258a5"
  };

firebase.initializeApp(firebaseConfig);
export default firebase;