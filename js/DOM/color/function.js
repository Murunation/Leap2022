let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "450px";

let h = Math.round(Math.random(1) * 255);
let g = Math.round(Math.random(1) * 255);
let y = Math.round(Math.random(1) * 255);
let e = Math.round(Math.random() * 16);
for (let i = 0; i < 16; i++) {
  let newDiv = document.createElement("div");
  rootElement.appendChild(newDiv);
  newDiv.style.width = "100px";
  newDiv.style.height = "100px";
  newDiv.style.border = "1px solid black";
  // h = Math.round(Math.random(1) * 255);
  newDiv.style.backgroundColor = `rgb(${y}, ${h}, ${g})`;
  if (i == e) {
    newDiv.style.backgroundColor = `rgb(${y + 100}, ${h}, ${g})`;
  }
}
