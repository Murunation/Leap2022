let button = document.querySelector("#myBtn");
let para = document.querySelectorAll("h2");
button.addEventListener("click", function () {
  para[0].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
  para[1].style.backgroundColor = `rgb(${Math.floor(
    Math.random() * 255
  )}, ${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`;
});
