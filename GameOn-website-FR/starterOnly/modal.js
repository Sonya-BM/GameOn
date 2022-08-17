function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

//Début de mon code ...............................

//////////////////////////////////  Suppression des champs et affichage du message de validation d'envoi //////////////////////////////////

/*const change = document.querySelector('form'); 
change.addEventListener("click", () => {
 change.style.visibility = 'hidden';
change.style.background = 'black';
});*/

/*Utilsé le code juste au dessus après avoir réglé le problème de validation*/


////////////////////////////////// Function fermeture fenêtre //////////////////////////////////


function closed() {
  modalbg.style.display = "none";
}
  
/*
° "none" fait disparaitre la modal
*/

////////////////////////////////// validation des champs //////////////////////////////////

/*Récupération*/
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname').value;
let email = document.getElementById('email').value;
let birthdate = document.getElementById('birthdate').value;



// regex
const namesRegex =/([A-Z][A-Za-z' -])+$/;
const emailRegex = /^\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/;
const birthdateRegex = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;



// messages
const errors = {
  errorName1: "2 caractères minimum",
  errorName2: "Seul l'alphabet est accépté",
  emailMsg: "Veuillez entrer une adresse mail valide",
  birthdateMsg: "Veuillez entrer une date de naissance valide",
  tounamentsMsg: "Veuillez entrer un nombre de tournois",
  locationMsg: "Veuillez séléctionner une ville",
  checkboxMsg: "Veuillez cocher accepter les conditions d'utilisation"
}



// formData[] pour ne pas les lister directement dans le HTML
// lastName
formData[0].addEventListener("input", firstNameValid);
function firstNameValid() {
  if (firstName.value.length < 2) {

    let firstNameMessage = document.getElementById("firstnameError");
    firstNameMessage.innerHTML = errors.errorName1;
    
    return false;

  } else if (namesRegex.test(firstName.value) == false) {

    let firstNameMessage = document.getElementById("firstnameError");
    firstNameMessage.innerHTML = errors.errorName2;
    
    return false;


  } else {
    document.getElementById("firstnameError").innerHTML = "";
    return true;
  }
}

formData[0].document.getElementById("lastname");
function lastNameValid(){
  if(lastName.value.trim() || lastName.valuelength < 2){
    let lastnameError = document.getElementById("lastname")
      lastnameError.innerHTML = errors.errorName1;

      return false;
        }
        else if  (namesRegex.test(firstName.value) == false){
          let lastnameError = document.getElementById("lastname")
          lastnameError.innerHTML = errors.errorName2;
    
          return false;
        }
        else{
          document.getElementById("firstnameError").innerHTML = "";
          return true;
        }
}

/*function emailValid(){
  let email = document.form.email.value;
  let modele = /^[a-z\-_\.]$/i;
  if (modele.test(email))
    alert("Votre adresse email est valide !")
  else
    alert("Votre adresse email est invalide !");
  return false;
}
*/