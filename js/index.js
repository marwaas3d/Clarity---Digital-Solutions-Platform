let services = document.getElementById("services");
let upArrow = document.getElementById("upArrow");
let downArrow = document.getElementById("downArrow");

services.addEventListener("click", function () {
  upArrow.classList.toggle("hide");
  downArrow.classList.toggle("hide");
});
