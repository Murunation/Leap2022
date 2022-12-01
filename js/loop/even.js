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
