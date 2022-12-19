// function greeting(name) {
//   alert(`Sain baina uu? ${name}`);
// }

// function processUserinput(callback) {
//   let name = prompt("Ta neree oruulna uu.");
//   callback(name);
// }

// processUserinput(greeting);

//
// function myDisplayer(some) {
//   document.getElementById("demo").innerHTML = some;
// }
// function myCalculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
// let result = myCalculator(111, 6);

// myDisplayer(result);

// function doSomething(func1, func2) {
//   //setinterval ugch bolno
//   if (now.getHours() < 18) {
//     func1();
//   } else {
//     func2();
//   }
// }

// function printHello() {
//   console.log("Hello");
// }
// function printBye() {
//   console.log("Bye Bye");
// }

// const now = new Date();
// doSomething(printHello, printBye);
let customButton = document.getElementById("root");
// ner uguhgui func
// customButton.addEventListener("click", () => {
//   console.log("Clicked");
// });
// ner uguh func
// function something() {
//   console.log("Clicked");
// }
// customButton.addEventListener("click", something);
customButton.innerText = "Click me";

//
// let smallButton = document.getElementById("smallC");
// window.addEventListener("scroll", () => {
//   //   smallButton.innerHTML = scrollY / 10 + "%";
//   let percent = Math.floor(
//     (window.scrollY * 100) /
//       (document.querySelector("body").clientHeight - window.innerHeight)
//   );
//   document.querySelector("smallC").innerHTML = `${percent}%`;
// });

//
window.addEventListener("scroll", () => {
  let percent = Math.floor(
    (window.scrollY * 100) /
      (document.querySelector("body").clientHeight - window.innerHeight)
  );
  document.querySelector("#percentage").innerText = `${percent}% `;
});
