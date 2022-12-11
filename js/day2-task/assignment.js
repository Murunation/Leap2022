//1

// let i = 4 > 3; // true
// console.log(i);
// let iii = 4 < 3; //false
// console.log(iii);
// let ii = 4 >= 3; //true
// console.log(ii);
// let iv = 4 <= 3; //false
// console.log(iv);
// let v = 4 == 4; //true
// console.log(v);
// let vi = 4 === 4; //true
// console.log(vi);
// let vii = 4 != 4; //false
// console.log(vii);
// let iix = 4 !== 4; //false
// console.log(iix);
// let ix = 4 != "4"; //false
// console.log(ix);
// let x = 4 == "4"; //true
// console.log(x);
// let xi = 4 === "4"; //false
// console.log(xi);


//2
// let one = 4 > 3 && 10 > 12; //false
// console.log(one);
// let two = 4 > 3 && 10 < 12; //true
// console.log(two);
// let three = 4 > 3 || 10 < 12; //true
// console.log(three);
// let four = 4 > 3 || 10 > 12; //true
// console.log(four);
// let five = !(4 > 3); //false
// console.log(five);
// let six = !(4 < 3); //true
// console.log(six);
// let seven = !(4 > 3 && 10 < 12); //false
// console.log(seven);
// let eight = !(4 > 3 && 10 > 12); //true
// console.log(eight);
// let nine = !(4 === "4"); //true
// console.log(nine);

//3
// let myAge = 20;
// let yourAge =parseFloat(prompt("Ta nasaa oruulna uu?"))
// if (myAge>yourAge){
//     alert("Bi chamaas ah um bna ahiin duu haha")
// } else {
//     alert("Tanias duu um bnoo ahaa")
// }

//4
// let day = parseFloat(prompt("Unuudur?"));
// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//    alert("Ajliin udur");
//     break;
//   case 6:
//   case 7:
//     alert("weekend");
//     break;
//   default:
//     alert("Not a day");
// }

//5

let  hours = parseFloat(prompt("Ajilsan tsag aa oruulna uu?"))
let ratePerhour = 28;
alert( "This week u will get " + hours*ratePerhour + " Usd")
