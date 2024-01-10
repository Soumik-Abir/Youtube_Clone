
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
// TODO: Add SDKs for Firebase products that you want to use
const firebaseConfig = {
    apiKey: "AIzaSyDHHuvvLkWDMtdw9Hf2fnbD3ejJo-Wkyv4",
    authDomain: "yt-clone-89.firebaseapp.com",
    projectId: "yt-clone-89",
    storageBucket: "yt-clone-89.appspot.com",
    messagingSenderId: "544020316664",
    appId: "1:544020316664:web:8bf8ffe50d708b8a84160d"
  };

  firebase.initializeApp(firebaseConfig)

  export default firebase.auth()