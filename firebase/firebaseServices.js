import { app,appError } from "./firebaseConfig.js";

let allServices = false;
let servicesError = true;

const services = async()=>{
    try{
        // get auth service
        const {getAuth} = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js");
        const auth = getAuth(app); //initialize authentication service
        console.log(auth);

        //get analytic service
        const {getAnalytics} = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-analytics.js");
        const analytic = getAnalytics(app);
        console.log(analytic);

        return {auth,analytic}; // all services return as object
        
    }catch(err){
        const error = "Failed to import Firebase : " + err;
        throw error;
    }
}

if(app){
    const servicesPromise = services(); //promise

    await servicesPromise.then((servicesRes)=>{
        console.log(servicesRes);
        allServices = servicesRes;
        servicesError = false;
    }).catch((err)=>{
        console.log(err);
        servicesError = err;
    })
}else{
    console.log("OOps! Error app initialization-->", appError);
}

export{ allServices,servicesError }