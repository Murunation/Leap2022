// let count = 10;
// while (count >= 1) {
//   count = count - 1;
//   console.log(count);
// }

// converting to ascii number
// let word = "abcd1234";
// console.log(word.charCodeAt(0));

// // Do while
// let text =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// let numberOfa = 0;
// for (text = 97; numberOfa++; ) {
//   console.log(numberOfa);
// }

// let text =
//   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
// let numberOfa = 0;
// let count = 0;
// while (count < text.length) {
//   if (text[count] == "b" || text[count] == "B") {
//     numberOfa = numberOfa + 1;
//   }
//   count = count + 1;
// }
// console.log(numberOfa);

// Negees 200 hurtel 3t huwaagddag toog ol.// tegsh toog alah
// let num = 100;
// let count = 0;
// while (num > 0) {
//   if (num % 2 == 0) {
//     count = count + 1;
//   }
//   num = num - 2;
// }
// console.log(count);

// Anhnii too mun esehiig ol
// let n = 17;
// let i = 1;
// while (i < n) {
//   if (n % i != 0) {
//     console.log("bish");
//   } else {
//     console.log("mun");
//   }
//   i = i + 1;
// }

// let x = 10;
// let count = 1;

// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     console.log(count);
//     y = y - 1;
//     count = count + 1;
//   }
//   x = x - 1;
// }

// let x = 10;
// let count = 1;
// let output = "";

// while (x > 0) {
//   let y = 10;
//   while (y > 0) {
//     output = output + count + " ";
//     y = y - 1;
//     count = count + 1;
//   }
//   x = x - 1;
// }
// console.log(output);

// tegsh toonuudiig
let x = 5;
let count = 2;
let output = "";

while (x > 0) {
  let y = 10;
  while (y > 0) {
    output = output + count + "\t";
    if (count % 20 == 0) output += "\n";
    y = y - 1;
    count = count + 2;
  }
  x = x - 1;
}
console.log(output);
