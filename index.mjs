  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
  import { getAuth} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
  import { getStorage } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js";
   
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyC2-kWzJvGpn9B7XVMyfx6r-fBCL1uYEp4",
    authDomain: "test-d14aa.firebaseapp.com",
    projectId: "test-d14aa",
    storageBucket: "test-d14aa.appspot.com",
    messagingSenderId: "1022392053565",
    appId: "1:1022392053565:web:51e35dec0dd7cbd1629f54"
  };

 
  

  
  // Initialize Firebase
   export const app = initializeApp(firebaseConfig);
   export const auth = getAuth(app);
   export const db = getFirestore(app);
   export const storage = getStorage(app);
