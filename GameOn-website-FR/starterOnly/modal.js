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

///////////////////////////////Fermeture de la modal ///////////////////////////////

function close() {
    modalbg.style.display = "none";
    document.getElementById("allData").reset();
}

/* none" ferme la modal*/
/* reset" renitialise la modal*/


// ////////////////////////// Récupération des id / //////////////////////////
let firstName = document.getElementById('firstname');
let lastName = document.getElementById('lastname');
let email = document.getElementById('email');
let birthdate = document.getElementById('birthdate');
let numberQuantity = document.getElementById('quantity');
let checkbox = document.getElementById('checkbox1');
let checkboxTwo = document.getElementById('checkbox2');
let locations = document.querySelectorAll('#location1 #location2 #location3 #location4 #location5 #location6');
let formConfirmation = document.getElementById('formConfirmation');
let buttonValid = document.getElementById('button');
// Utilisation de regex
const nameCharacter = /([A-Za-z-])+$/;
const emailCharacter = /^[a-zA-Z0-9_-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/;    /*/([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-z]{2,3})$/ */
const birthdateCharacter =/^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
const quantityCharacter = /([0-9])$/;
// messages
const errors = {
    errorName1: "2 caractères minimum",
    errorName2: "Seul l'alphabet est accépté",
    errorName3: "2 caractères minimum",
    errorName4: "Seul l'alphabet est accépté",
    errorEmail: "Veuillez entrer une adresse mail valide",
    errorBirthdate: "mauvaise date",
    birthdateError2: "Veuillez entrer une date de naissance",
    errorBirthdateYear: "Mauvaise année",
    errorBirthdateDay : "Erreur dans le jour de naissance",
    errorBirthdateMonth : "Erreur dans le mois",
    errorQuantity: "Veuillez entrer un nombre",
    errorCheckbox: "Vous devez valider cette case",
    errorLocation: "Veuillez choisir une ville"
}

// formData[] création d'un tableau qui récupère les données et les stocks on
// récupre
document
    .getElementById('allData')
    .addEventListener("submit", function (event) {
        event.preventDefault();
        console.log(event);
        firstNameValid();
        lastNameValid();
        emailValid();
        birthdateValid();
        birthdateValid2();
        quantityValid();
        checkValid();
        locationValid();
        close();
        launchConfirmation();
    });
//////////////////////////// firsttName //////////////////////////////
/*On vérifie si la valeur dans le champs est inférieur à 2 caractères et si les caractères saisie corresponde aux conditions du regex avec la méthode test()
si ce n'est pas le cas on affiche un message d'erreur et le cadre du champs devient rouge*/

function firstNameValid() {
    if (firstName.value.length < 2) {

        let firstNameMessage = document.getElementById("firstnameError");
        firstNameMessage.innerHTML = errors.errorName1;
       
        firstName.style.border = '2px solid red';

        return false;

    } else if (!nameCharacter.test(firstName.value)) {

        let firstNameMessage = document.getElementById("firstnameError");
        firstNameMessage.innerHTML = errors.errorName2;
      
        firstName.style.border = '2px solid red';

        return false;

    } else {
        document
            .getElementById("firstnameError")
            .innerHTML = "";

            firstName.style.border = '2px solid white';

        return true;
    }
}


//////////////////////////// lastName //////////////////////////////
/*On vérifie si les caractères saisie corresponde aux conditions du regex
si ce n'est pas le cas on affiche un message d'erreur et le cadre du champs devient rouge*/

function lastNameValid() {
    if (lastName.value.length < 2) {

        let lastNameMessage = document.getElementById("lastNameError");
        lastNameMessage.innerHTML = errors.errorName3;

        lastName.style.border = '2px solid red';

        return false;

    } else if (nameCharacter.test(lastName.value) == false) {

        let lastNameMessage = document.getElementById("lastNameError");
        lastNameMessage.innerHTML = errors.errorName4;

        lastName.style.border = '2px solid red';

        return false;

    } else {
        document
            .getElementById("lastNameError")
            .innerHTML = "";

            lastName.style.border = '2px solid white';

        return true;
    }
}

//////////////////////////// email //////////////////////////////
/*On vérifie si les caractères saisie corresponde aux conditions du regex
si ce n'est pas le cas on affiche un message d'erreur et le cadre du champs devient rouge*/
function emailValid() {
    if (emailCharacter.test(email.value) == false) {

        let emailMessage = document.getElementById("emailError");
        emailMessage.innerHTML = errors.errorEmail;

        email.style.border = '2px solid red';

        return false;

    } else {
        document
            .getElementById("emailError")
            .innerHTML = "";

            email.style.border = '2px solid white';

        return true;
    }
}


//////////////////////////// Birthdate //////////////////////////////
/*On vérifie si la date de naissance a bien été saisi, si ce n'est pas le cas
on affiche un message d'erreur et le champs devient rouge*/
function birthdateValid2() {
    if (birthdate.value.length < 1) {
        let birthDateMessage2 = document.getElementById('birthdateError');
        birthDateMessage2.innerHTML = errors.birthdateError2;
     
        birthdate.style.border = '2px solid red';

        return false;
    } else {
        document
            .getElementById("birthdateError")
            .innerHTML = "";

            birthdate.style.border = '2px solid white';

        return true;
    }
}



let today = new Date(); //Récupère la date actuelle
let currentYear = today.getFullYear(); // Stock l'année dans currentYear
let daysInMonth = [
    31,
    28,
    31,
    30,
    31,
    30,
    31,
    31,
    30,
    31,
    30,
    31
];

function birthdateValid() {
    let birthDateMessage = document.getElementById("birthdateError");
    birthDateMessage.innerHTML = errors.errorBirthdateYear;

    let date = birthdate  
        .value
        .split('-');
/*On divise la valeur en array de strings */
    console.log(date);
    // 2 représente le jour, ici on vérifie si le nombre de jour est inférieur à 1
    // jour
    if (date[2] < 1) {
       let BirthdateMessageDay = document.getElementById('birthdateError');
       BirthdateMessageDay.innerHTML = errors.errorBirthdateDay;
       
       birthdate.style.border = '2px solid red';

        return false;

    } else if (date[1] < 1 || date[1] > 12) {
      let  birthDateMessageMonth = document.getElementById('birthdateError');
      birthDateMessageMonth.innerHTML = errors.errorBirthdateMonth;

      birthdate.style.border = '2px solid red';

        return false;

    } else if (date[0] > 2010) {
        let birthDateMessageYear = document.getElementById("birthdateError");
        birthDateMessageYear.innerHTML = errors.errorBirthdateYear;
        
        birthdate.style.border = '2px solid red';

        return false;

    }
    if (date[0] > 2010) {
        birthDateMessage.textContent = "Vous devez être majeur";

        birthdate.style.border = '2px solid red';

        return false;

    } else if (currentYear < 2010) {

        birthdate.style.border = '2px solid white';

        return true;
    }
}


//////////////////////////// Quantity, nombre de tournoi //////////////////////////////
/*On vérifie si la valeur entrée dans le champs est inférieur à 1, si ce n'est pas le cas on 
affiche un message d'erreur et le cadre du champs devient rouge*/
function quantityValid() {
    if (numberQuantity.value.length < 1) {

        let quantityMessage = document.getElementById("quantityError");
        quantityMessage.innerHTML = errors.errorQuantity;

        numberQuantity.style.border = '2px solid red';
        return false;

    } else {
        document
            .getElementById("quantityError")
            .innerHTML = "";
           
            numberQuantity.style.border = '2px solid white';

        return true;
    }
}


//////////////////////////// Locations, choix des villes //////////////////////////////
/*On vérifie si au moins une des cases a été validé, si ce n'est pas le cas on affiche un message d'erreur*/

function locationValid() {
    if (!locations.checked) {
        let locationsMessage = document.getElementById('locationMessage');
        locationsMessage.innerHTML = errors.errorLocation;

        return false;

    } else {
        document
            .getElementById('locationMessage')
            .innerHTML = "";

         

        return true;
    }
}

function locationValid() {
    if (document.getElementById('location1').checked) {
        document
            .getElementById("locationMessage")
            .innerHTML;


    } else if (document.getElementById('location2').checked) {
        document
            .getElementById("locationMessage")
            .innerHTML = "";



    } else if (document.getElementById('location3').checked) {
        document
            .getElementById("locationMessage")
            .innerHTML = "";


    } else if (document.getElementById('location4').checked) {
        document
            .getElementById("locationMessage")
            .innerHTML = "";


    } else if (document.getElementById('location5').checked) {
        document
            .getElementById("locationMessage")
            .innerHTML = "";


    } else if (document.getElementById('location6').checked) {
        document
            .getElementById("locationMessage")
            .innerHTML = "";


    } else {
        document
            .getElementById("locationMessage")
            .innerHTML = errors.errorLocation;
     
            locations.style.borderColor = 'red';

        };   
}




//////////////////////////// Parie checkbox //////////////////////////////

/*On vérifie  si la checkbox est validé, si ce n'est pas le cas on affiche un message d'erreur*/
function checkValid() {
    if (!checkbox.checked) {

        let checkboxMessage = document.getElementById("checkboxMessage");
        checkboxMessage.innerHTML = errors.errorCheckbox;
     
        return false;

    } else {
        document
            .getElementById("checkboxMessage")
            .innerHTML = "";

           

        return true;
    }
}



//////////////////////////// Parie modal remerciement //////////////////////////////
//On affiche le modal avec display block et on le ferme avec display none
function launchConfirmation() {
    formConfirmation.style.display = "block";  
  }

function closeConfirmation(){
    formConfirmation.style.display = "none";
}

