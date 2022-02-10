// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCORDAPofDVCp0h5XwcqvftCLh5fn8vTds",
    authDomain: "kwitter-a2fdc.firebaseapp.com",
    databaseURL: "https://kwitter-a2fdc-default-rtdb.firebaseio.com",
    projectId: "kwitter-a2fdc",
    storageBucket: "kwitter-a2fdc.appspot.com",
    messagingSenderId: "233159844604",
    appId: "1:233159844604:web:d32b998f2554b10755ad79"
  };
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS

function addUser(){
    user_name=document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}