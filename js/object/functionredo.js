// Function to compute the product of p1 and p2
function myFunction(p1, p2) {
  //p2 meaning let p2 = orj irj baigaa utga/ p2 iig haaltnaas gadna tanihgui
  console.log("p1,p2");
  return p1 * p2;
}
let a = 15;
let b = 10;
let result = myFunction(a, b);
console.log(result); //resulted hadgalahgui bol myfunction(a,b); gej bicheed gudamjind hayna utga aa zaawal awah heregtei
// myFunction(b, b); //huwirna
// output 150
function myFunction1(p1, p2) {
  console.log("Welcome to my rest");
  console.log("Welcome to my rest");
  console.log("Welcome to my rest");
  console.log("Welcome to my rest");
  console.log("Welcome to my rest");
  //   let obj = { val1: p1, val2: p2 }; //ingehiin orond
  //   return obj; //ingehiin orond
  return { val1: p1, val2: p2 };
}
let a1 = 15;
let b1 = 10;
let result1 = myFunction1(a1, b1);
console.log(result1);

//
function addtwoNumber(a, b) {
  return a + b;
}

function findSum(k, j) {
  return 2 * addtwoNumber(k, j);
}
let resultofTwo = findSum(10, 20);
console.log(resultofTwo);

//Uuriiguu duudah example Stack
function findSum2(k, j) {
  if (k > j) {
    return 0;
  }
  return k + findSum2(k + 1, j);
}
let resultofTwo2 = findSum2(10, 20);
console.log(resultofTwo2);
