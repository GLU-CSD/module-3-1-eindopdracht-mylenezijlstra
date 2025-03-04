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
  localStorage.setItem("productCount", 0);
  document.getElementById("winkelwagenbolletje").innerHTML = productCount;
}
