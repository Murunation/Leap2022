// alert("Welcome to Pinecone academy");
function openWindow() {
  let url = "http://www.google.com";
  let hemjee = "height=1000, width=1000";
  window.open(url, "", hemjee);
}

//
// let result = confirm("Are you sure?");

// let message = result ? "Ta OK towchiig darlaa" : "Ta Cancel towchiig darlaa";

// alert(message);
//
let ageStr = prompt("How old are you?");
let age = Number(ageStr);

let feedback =
  age >= 16
    ? "You are eligible to join."
    : "You must be at leats 16 year oldto join maaaan";

alert(feedback);
