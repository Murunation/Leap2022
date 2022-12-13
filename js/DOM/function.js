// ID
document.getElementById("root").innerText =
  "<div class=darkmode> <h2>This is a Dark Mode</h2> </div>";
// CLASS
document.getElementsByClassName("dummy")[0].innerHTML = " World!"; //[0] barij awna Elemtns gej bga uchir
// TAG selector
document.getElementsByTagName("h1")[0].innerHTML = "H1 "; //Tag aar n barij awna
// QUERYSELECTOR
document.querySelector(".name").innerHTML = "THIs is a name"; //classiin duudaj barij awna.
//elements
document.getElementById("root").innerHTML =
  "<div class= 'darkmode'> <h1>Hello shuudee</h1> </div>";

//img
// document.getElementsByTagName("img")[0].alt = "Blalal";
// document.getElementsByTagName("img")[0].width = "500";
// document.getElementsByTagName("img")[0].src = "hack.jpeg";
// document.getElementsByClassName("profileName")[0].style.backgroundColor =
//   "blue";

// const newDiv = document.createElement("h1");
// const newContent = document.createTextNode("Welcome to our page");
// newDiv.appendChild(newContent);
// const main = document.getElementsByTagName("main");
// main[0].appendChild(newDiv);

//
// let rootElement = document.getElementById("root");
// let ulElement = document.createElement("ul");
// rootElement.appendChild(ulElement);

// for (let i = 0; i < 20; i++) {
//   let liElement = document.createElement("li");
//   liElement.innerText = i.toString();
//   ulElement.appendChild(liElement);
// }

//Chess
// let rootElement = document.getElementById("root");
// rootElement.style.display = "flex";
// rootElement.style.flexWrap = "wrap";
// rootElement.style.width = "850px";

// for (let i = 0; i < 8; i++) {
//   for (let j = 0; j < 8; j++) {
//     let newDiv = document.createElement("div");
//     rootElement.appendChild(newDiv);
//     newDiv.style.width = "100px";

//     newDiv.style.height = "100px";
//     newDiv.style.border = "1px solid black";
//     if ((i + j) % 2 == 0) {
//       newDiv.style.backgroundColor = "grey";
//     }
//   }
// }

// setinterval;
let i = 0;
setInterval(function () {
  i++;
  console.log(i);
}, 1000);

let name = "andy";
let message = `${i}px`; //$ huwisagch bolgoj bgaa

//
