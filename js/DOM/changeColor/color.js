let button = document.querySelector("#myBtn");
button.addEventListener("click", function () {
  document.querySelector("h2").style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  document.querySelector("h3").style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
