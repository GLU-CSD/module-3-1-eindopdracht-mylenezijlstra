let productCount = 0;

if (localStorage.getItem("productCount")) {
  productCount = localStorage.getItem("productCount");
} else {
  productCount = 0;
  localStorage.setItem("productCount", 0);
}

document.getElementById("winkelwagenbolletje").innerHTML = productCount;
  //als je voor alle wilt blijven doortellen (standaard) vul in productCount
  //als je naar nul wilt vervang productCount met 0

function winkelWagenAdd() {
  productCount = Number(productCount) + 1;
  localStorage.setItem("productCount", productCount); 
  document.getElementById("winkelwagenbolletje").innerHTML = productCount;
}
//deze regels code zijn voor local stoarge. 
// Als ik dan naar een andere pagina ga of de pagina refresh blijft het cijfer in het bolletje hetzelde.