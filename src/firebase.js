import firebase from 'firebase'

//The core Firebase JS SDK is always required and must be listed first

{/* <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-app.js"></script> */}

//TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

{/* <script src="https://www.gstatic.com/firebasejs/8.4.2/firebase-analytics.js"></script> */}

 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
     apiKey: "AIzaSyDlv25KcOnmHMLj1t4MfqPYOPJheFbz48o",
     authDomain: "disney-clone-596c4.firebaseapp.com",
     projectId: "disney-clone-596c4",
     storageBucket: "disney-clone-596c4.appspot.com",
     messagingSenderId: "36419699283",
     appId: "1:36419699283:web:f3954a7a793ceb38213ca6",
     measurementId: "G-WT13Y8RFGR"
   };

   

   const firebaseApp = firebase.initializeApp(firebaseConfig)
   const db = firebaseApp.firestore();
   const auth = firebase.auth();
   const provider = new firebase.auth.GoogleAuthProvider();
   const storage= firebase.storage();

   export {auth, provider, storage}
   export default db;
