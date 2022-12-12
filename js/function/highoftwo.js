// let A = parseFloat(prompt("Enter first nuumber"));
// let B = parseFloat(prompt("Enter second nuumber"));
// function maxNumber(A, B) {
//   let max = 0;
//   if (A > B) {
//     max = A;
//   } else {
//     max = B;
//   }
//   return max;
// }
// let highest = maxNumber(A, B);
// alert(highest);

// CHANGING UPPER TO LOWER AND LOWER TO UPPER
let str = "Hello, I am God's fav child.";
rest = "";
function change(str, rest) {
  for (let i = 0; i < str.length; i++) {
    let c = str[i];
    if (c == c.toUpperCase()) {
      rest += c.toLowerCase();
    } else if (c == c.toLowerCase()) {
      rest += c.toUpperCase();
    } else {
      rest += c;
    }
  }
  console.log(change);
}

// toUpperCase;

// let upper = prompt("Enter: ");
// function changingUpper(upper) {
//   return changingUpper;
// }
// let txt = upper.toUpperCase();
// alert(txt);
// toLowerCase
// let upper = prompt("Enter: ");
// function changingUpper(upper) {
//   return changingUpper;
// }
// let txt = upper.toLowerCase();
// alert(txt);
// program to check if a number is prime or not

// Prime number
// const number = parseInt(prompt("Enter  number: "));
// let isPrime = true;

// check if number is equal to 1
// if (number === 1) {
//   alert("1 is neither prime nor composite number.");
// } else if (number > 1) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     alert(`${number} is a prime number`);
//   } else {
//     alert(`${number} is a not prime number`);
//   }
// } else {
//   alert("The number is not a prime number.");
// }
