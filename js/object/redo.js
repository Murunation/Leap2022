// dawhar for loop
// for (let index = 1; index < 10; index *= 2) {
//   for (let j = 0; j < 2; j++) {
//     process.stdout.write(index + " ");
//   }
//   console.log(); //Newline
// }
// 1 1
// 2 2
// 4 4
// 8 8
let index = 1;
while (index < 10) {
  for (let j = 0; j < 2; j++) {
    process.stdout.write(index + " ");
  }
  console.log();
  index *= 2;
}

let random = 56;
let userGuess = Number(prompt("Enter number"));
while (userGuess !== random) {
  userGuess = Number(prompt("Enter number"));
  if (userGuess < random) {
    console.log("low");
  } else {
    console.log("high");
  }
}

//Do while example //Dahin uuildllee hiih uu? gedgee asuuj bna.
let random1 = 56;
let userGuess1;
do {
  userGuess1 = Number(prompt("Enter number"));
  if (userGuess1 < random1) {
    console.log("low");
  } else {
    console.log("high");
  }
} while (userGuess1 !== random);
