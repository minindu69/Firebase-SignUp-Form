// import{allServices} from "../firebase/firebaseServices.js"
//get auth functionalities
import { app } from "../firebase/firebaseConfig.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";

const email = document.getElementById("email");
const password = document.getElementById("password");
const btn = document.getElementById("btn");

// initialized auth
// const auth = allServices.auth;
const auth = getAuth(app);
console.log(auth);


const register = ()=>{
    console.log("hii");
    const userEmail = email.value;
    console.log(userEmail);
    const userPassword = password.value;
    console.log(userPassword);

    createUserWithEmailAndPassword(auth,userEmail,userPassword)
    .then((userCredential)=>{
        console.log(userCredential);
        console.log("user registered successfully!");
    }).catch((err)=>{
        console.log(err);
        console.log("user not registered!");
    });
}

export{register}