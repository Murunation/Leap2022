let array = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];
//SORT
console.log(array.sort());
//REVERSE
console.log(array.reverse());
//First element
const firstElement = array.shift();
console.log(firstElement);
console.log(array);
//last element
const lastElement = array.pop();
console.log(array);
//MIDDLE ofCompany
array.splice(2, 1);
console.log(array);
//ALL company
console.log(array.slice(4));
