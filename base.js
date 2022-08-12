const firebaseConfig = {

    apiKey: "AIzaSyDkM4KTkoV3-Ii3tZnq9KMv38ctueI1RFs",
  
    authDomain: "donty-8895c.firebaseapp.com",
  
    databaseURL: "https://donty-8895c-default-rtdb.firebaseio.com",
  
    projectId: "donty-8895c",
  
    storageBucket: "donty-8895c.appspot.com",
  
    messagingSenderId: "819405317778",
  
    appId: "1:819405317778:web:ee542b515085148650e84b"
  
  };

  //Initialize firebase
  firebase.initializeApp(firebaseConfig);

  //Reference
  var dontyDB = firebase.database().ref("Donty");

  document.getElementById("Donty").addEventListener("submit", submitForm);
  
  
  function submitForm(e)
  {
    e.preventDefault();

    var firstName = getElementVal('firstName');
    var lastName = getElementVal('lastName');
    var email = getElementVal('email');
    var num = getElementVal('num');
    // var datepicker = getElementVal('datepicker');
   
    saveMessages(firstName, lastName, email, num);

    //enavle alert
    document.querySelector('.alert').style.display = "block";

    //remove the alert
    setTimeout(() => {
    document.querySelector('.alert').style.display = "none";
    }, 3000);

    //reset the form
    document.getElementById("Donty").reset();

    // console.log(firstName, lastName, email, num);
  }
  
  const saveMessages=(firstName, lastName, email, num) =>
  {
    var newDonty = dontyDB.push();

    newDonty.set({
        firstName : firstName,
        lastName : lastName,
        email : email,
        num : num,
        // datepicker : datepicker,
    });
  }

  const getElementVal = (id) => 
  {
    return document.getElementById(id).value;
  };