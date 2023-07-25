import { auth, db, storage } from "./index.mjs"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";
import { ref, uploadBytes } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-storage.js"

let singup = document.getElementById('signup')
singup.addEventListener("click", () => {
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let file = document.getElementById('file').files;
    createUserWithEmailAndPassword(auth, email, password)

        .then(async (userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
            try {
                const docRef = await addDoc(collection(db, "chatApp"), {
                    fname: fname,
                    lname: lname,
                    email: email,
                    password: password,
                });
               

                console.log("Document written with ID: ", docRef.id);
            } catch (e) {
                console.error("Error adding document: ", e);
            }

            const storageRef = ref(storage, email);

            // 'file' comes from the Blob or File API
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
            });

            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("error code", errorCode);
            console.log("error meassage", errorMessage);
            // ..
        })


})