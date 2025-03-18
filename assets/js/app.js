let productCount = 0;

if (localStorage.getItem("productCount")) {
  productCount = localStorage.getItem("productCount");
} else {
  productCount = 0;
  localStorage.setItem("productCount", 0);
}

document.getElementById("winkelwagenbolletje").innerHTML = productCount;

function winkelWagenAdd() {
  productCount = Number(productCount) + 1;
  //als je voor alle wilt blijven doortellen (standaard) vul in productCount
  //als je naar nul wilt vervang productCount met 0
  localStorage.setItem("productCount", productCount);
  document.getElementById("winkelwagenbolletje").innerHTML = productCount;
}
//deze regels code zijn voor local stoarge. 
// Als ik dan naar een andere pagina ga of de pagina refresh blijft het cijfer in het bolletje hetzelde.

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";  // Voeg de klasse 'responsive' toe om de links zichtbaar te maken
  } else {
    x.className = "topnav";  // Verwijder de klasse 'responsive' om de links weer te verbergen
  }
}
//js voor hamburgermenu. zorgt ervoor dat de website ook voor telefoon en ipad beschikbaar is.

function resetForm() {
  document.getElementById("alertBijNaam").innerHTML = "";
  document.getElementById("alertAchterNaam").innerHTML = "";
  document.getElementById("alertBijEmail").innerHTML = "";
  document.getElementById("alertBijhuisnmr").innerHTML = "";
  document.getElementById("alertBijToev").innerHTML = "";
  document.getElementById("alertBijPostcode").innerHTML = "";
  document.getElementById("alertBijTelefoon").innerHTML = "";
  document.getElementById("alertBijDatum").innerHTML = "";
}

function validateForm() {


    // Haal de geselecteerde aanhef op
    let aanhef = document.querySelector('input[name="aanhef"]:checked').value;

    // Voeg de aanhef toe aan de querystring voor de resultpagina
    let form = document.forms["mijnFormulier"];
    form.action = "resultaat.php?aanhef=" + aanhef + "&" + new URLSearchParams(new FormData(form)).toString();

//    return true;  // Verzendt het formulier
//  }

  console.log("validateForm");
  ///---------
  let voornaam = document.forms["mijnFormulier"]["voornaam"].value;
  if (voornaam == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijNaam").innerHTML =
      "Naam moet ingevuld worden.";
    return false;
  }

  ///---------
  let achternaam = document.forms["mijnFormulier"]["achternaam"].value;
  if (achternaam == "") {
    //alert("Name must be filled out");
    document.getElementById("alertAchterNaam").innerHTML =
      "Achternaam moet ingevuld worden.";
    return false;
  }

  ///---------
  let huisnummer = document.forms["mijnFormulier"]["huisnummer"].value;
  if (huisnummer == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijhuisnmr").innerHTML =
      "Huisnummer moet ingevuld worden.";
    return false;
  }

  ///---------
  let straatnaam = document.forms["mijnFormulier"]["straatnaam"].value;
  if (straatnaam == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijToev").innerHTML =
      "Toev. moet ingevuld worden.";
    return false;
    ///---------
  }

  ///---------
  let postcode = document.forms["mijnFormulier"]["postcode"].value;
  if (postcode == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijPostcode").innerHTML =
      "Postcode moet ingevuld worden.";
    return false;
    ///---------
  }

  ///---------
  let email = document.forms["mijnFormulier"]["email"].value;
  if (email == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijEmail").innerHTML =
      "Email moet ingevuld worden.";
    return false;
    ///---------
  }

  ///---------
  let telefoonnummer = document.forms["mijnFormulier"]["telefoonnummer"].value;
  if (telefoonnummer == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijTelefoon").innerHTML =
      "Telefoonnummer moet ingevuld worden.";
    return false;
    ///---------
  }

  ///---------
  let datum = document.forms["mijnFormulier"]["datum"].value;
  if (datum == "") {
    //alert("Name must be filled out");
    document.getElementById("alertBijDatum").innerHTML =
      "Datum moet ingevuld worden.";
    return false;
    ///---------
  }
  let checkbpxchecked = document.getElementById("checkbox1").checked;
  if (checkbpxchecked == false) {
    //alert("Name must be filled out");
    document.getElementById("alertBijCheckbox").innerHTML =
      "Algemene voorwaarden accepteren.";
    return false;
    ///---------
  }

}
//bovenste code zorgt ervoor dat er een melding in beeld komt te staan dat je dit vak verplicht in moet vullen.
//js voor formulier

// Haal de queryparameters op uit de URL
let url = new URL(window.location.href);

let aanhef = url.searchParams.get("aanhef");
let voornaam = url.searchParams.get("voornaam");
let tussenv = url.searchParams.get("tussenv");
let achternaam = url.searchParams.get("achternaam");
let huisnummer = url.searchParams.get("huisnummer");
let straatnaam = url.searchParams.get("straatnaam");
let postcode = url.searchParams.get("postcode");
let telefoonnummer = url.searchParams.get("telefoonnummer");
let email = url.searchParams.get("email");
let datum = url.searchParams.get("datum");
let land = url.searchParams.get("land");



// Vul de inhoud van het element met ID "resultaat" in
document.getElementById("resultaat").innerHTML =

  "Aanhef: " + aanhef +
  "<br><br>Voornaam: " + voornaam +
  "<br><br>Tussenvoegsel: " + tussenv +
  "<br><br>Achternaam: " + achternaam +
  "<br><br>Huisnummer: " + huisnummer +
  "<br><br>Straatnaam: " + straatnaam +
  "<br><br>Postcode: " + postcode +
  "<br><br>Land: " + land +
  "<br><br>Email: " + email +
  "<br><br>Telefoonnummer: " + telefoonnummer +
  "<br><br>Geboortedatum: " + datum;
  //zorgen ervoor dat alle gegevens onder elkaar komen te staan

//js voor resultaat