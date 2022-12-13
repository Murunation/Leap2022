let rootElement = document.getElementById("root");
rootElement.style.display = "flex";
rootElement.style.flexWrap = "wrap";
rootElement.style.width = "850px";
let h = Math.round(Math.random(1) * 255);
let g = Math.round(Math.random(1) * 255);
let y = Math.round(Math.random(1) * 255);
let e = Math.round(Math.random(y - 100));
for (let i = 0; i < 8; i++) {
  for (let j = 0; j < 8; j++) {
    let newDiv = document.createElement("div");
    rootElement.appendChild(newDiv);
    newDiv.style.width = "100px";
    newDiv.style.height = "100px";
    newDiv.style.border = "1px solid black";
    // h = Math.round(Math.random(1) * 255);
    newDiv.style.backgroundColor = `rgb(${y}, ${h}, ${g})`;
    if (j == Math.round(Math.random()) && i == Math.round(Math.random())) {
      newDiv.style.backgroundColor = `rgb(${e}, ${h}, ${g})`;
    }
  }
}
