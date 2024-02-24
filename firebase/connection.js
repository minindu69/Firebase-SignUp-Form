import { allServices,servicesError } from "./firebaseServices.js";

const overlay = document.getElementById("overlay");
const content = document.getElementById("content");
const email = document.getElementById("email");

console.log("All services :",allServices);
console.log("Errors :",servicesError);

if(allServices){
    console.log("All services are succussfully initialized!");

    // hide animation and load form
    overlay.remove();
    content.classList.add("show");
    email.focus();

}else{
    console.log("OOps! Error loading some services-->",servicesError);

    //pop-up error msg
}