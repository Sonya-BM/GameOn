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

// Début de mon code ...............................
// ////////////////////////////////  Suppression des champs et affichage du
// message de validation d'envoi ////////////////////////////////

/*const change = document.querySelector('form');
change.addEventListener("click", () => {
 change.style.visibility = 'hidden';
change.style.background = 'black';
});*/

/* Utilsé le code juste au dessus après avoir réglé le problème de validation */

// //////////////////////////////// Function fermeture fenêtre
// ////////////////////////////////

function closed() {
    modalbg.style.display = "none";
}

/*
° "none" fait disparaitre la modal
*/

// //////////////////////////////// validation des champs
// ////////////////////////////////

/*Récupération*/
let firstName = document.getElementById('firstname');
let lastName = document
    .getElementById('lastname');
let email = document
    .getElementById('email');
let birthdate = document
    .getElementById('birthdate');

// Utilisation de regex
const nameCharacter = /([A-Z][A-Za-z' -])+$/;
const emailCharacter = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;
const birthdateCharacter = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;

// messages
const errors = {
    errorName1: "2 caractères minimum",
    errorName2: "Seul l'alphabet est accépté",
    errorName3: "2 caractères minimum",
    errorName4: "Seul l'alphabet est accépté",
    errorEmail: "Veuillez entrer une adresse mail valide",
}

// formData[] création d'un tableau qui récupère les données et les stocks
//on récupre
document.getElementById('allData').addEventListener("submit", function (event) {
event.preventDefault();
console.log(event);
firstNameValid();
lastNameValid();
emailValid();
}
);


function firstNameValid() {
    if (firstName.value.length < 2) {

        let firstNameMessage = document.getElementById("firstnameError");
        firstNameMessage.innerHTML = errors.errorName1;

        return false;

    } else if (nameCharacter.test(firstName.value) == false) {

        let firstNameMessage = document.getElementById("firstnameError");
        firstNameMessage.innerHTML = errors.errorName2;

        return false;

    } else {
        document.getElementById("firstnameError").innerHTML = "";
       
        return true;
    }
}

//lastName

function lastNameValid() {
    if (lastName.value.length < 2) {

        let lastNameMessage = document.getElementById("lastNameError");
        lastNameMessage.innerHTML = errors.errorName3;

        return false;

    } else if (nameCharacter.test(lastName.value) == false) {

        let lastNameMessage = document.getElementById("lastNameError");
        lastNameMessage.innerHTML = errors.errorName4;

        return false;

    } else {
        document.getElementById("lastNameError").innerHTML = "";
       
        return true;
    }
}


/*email */
function emailValid() {
 if (emailCharacter.test(email.value) == false) {

        let emailMessage = document.getElementById("emailError");
        emailMessage.innerHTML = errors.errorEmail;

        return false;

    } else {
        document.getElementById("emailError").innerHTML = "";
       
        return true;
    }
}

/*Birthdate*/
