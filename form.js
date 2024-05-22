 // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  // Initialize Firebase

  const firebaseConfig = {
    apiKey: "AIzaSyDwBfvOiejVODzwgNS8b666-zCphrnOP_c",
    authDomain: "coffee-b3586.firebaseapp.com",
    projectId: "coffee-b3586",
    storageBucket: "coffee-b3586.appspot.com",
    messagingSenderId: "1009221318392",
    appId: "1:1009221318392:web:c4f6616fb442ec4b21ed0d",
    measurementId: "G-6Q1D5ZVF0C"
  };
  firebase.initializeApp(firebaseConfig);

  const auth =  firebase.auth();

  //signup function
  function signUp(){
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value,password.value);
    //
    promise.catch(e=>alert(e.message));
    alert("SignUp Successfully");
  }

  //signIN function
  function  signIn(){
    var email = document.getElementById("email");
    var password  = document.getElementById("password");
    const promise = auth.signInWithEmailAndPassword(email.value,password.value);
    promise.catch(e=>alert(e.message));
    
  }


  //signOut

  function signOut(){
    auth.signOut();
    alert("SignOut Successfully from System");
  }

  //active user to homepage
  firebase.auth().onAuthStateChanged((user)=>{
    if(user){
      var email = user.email;
      alert("Active user "+email);

    }else{
      alert("No Active user Found")
    }
  })