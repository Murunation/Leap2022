/*
let myButton = document.getElementById("myBtn");
let myBody = document.getElementsByTagName("body");
function changeBackground() {
  myBody.style = "background-color: green";
}
myButton.addEventListener("click", changeBackground);
*/
let button = document.querySelector("#myBtn");
button.addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
