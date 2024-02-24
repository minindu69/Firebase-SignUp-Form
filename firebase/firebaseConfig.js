// Import the functions you need from the SDKs you need
// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
let app = false;
let appError = false;

const firebaseConfig = {
    apiKey: "AIzaSyB593ZS1K3fKnt52lWAgGP9xdV8VW2Sgs0",
    authDomain: "pos-system-ce3b5.firebaseapp.com",
    databaseURL: "https://pos-system-ce3b5-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "pos-system-ce3b5",
    storageBucket: "pos-system-ce3b5.appspot.com",
    messagingSenderId: "492333057399",
    appId: "1:492333057399:web:c963e48319184cffd14d72",
    measurementId: "G-G6WNB2JQ9D"
  };

  const initializeApp = async()=>{
      try{
        // Initialize Firebase
        const { initializeApp } = await import("https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js");
        const app = initializeApp(firebaseConfig);
        console.log(app);
        return app;
      }catch(err){
        console.log(err);
        const error = "Failed to initialize Firebase : " + err;
        throw err;
      }
  }

  const initializedApp = initializeApp();
//   console.log(initializedApp);

  await initializedApp.then((appRes)=>{
    console.log("App initialized successfully");
    // console.log(appRes);
    app = appRes;
  }).catch((err)=>{
    console.log(err);
    appError = err;
  })

  export{ app,appError }