import { db} from "./index.mjs"
import { collection, getDocs} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";



let myImg = document.getElementById("myImg");
let myName = document.getElementById("myName");

const querySnapshot = await getDocs(collection(db, "chatApp"));
querySnapshot.forEach(async(doc) => {
  console.log(doc.data());
})


