let button = document.querySelector("#myBtn");
button.addEventListener("click", function () {
  document.getElementById(
    "htwoofTwo"
  ).style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  document.getElementById(
    "htwoofOne"
  ).style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
