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


