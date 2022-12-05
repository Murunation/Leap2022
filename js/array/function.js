/* 
---1
--2 3
-4 5 6
7 8 9 10
*/
// let output = "";
// let count = 1;
// for (let row = 1; row <= 5; row++) {
//   for (let dash = 5 - row; dash > 0; dash--) {
//     output += "-";
//   }
//   for (let num = 1; num <= row; num++) {
//     output += count + " ";
//     count++;
//   }
//   output += "\n";
// }
// console.log(output);
// let students = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// console.log(students.length);
// for (let i = 0; i < students.length; i++) {
//   students[i]++;
// }
// console.log(students);
// let studentNames = ["boldoo", "dorjoo", "tsetsgeel", "dulmaa"];
// let dNames = [];
// let i = 0;
// let j = 0;
// while (i <= studentNames.length) {
//   if (studentNames[i] && studentNames[i][0] === "d") {
//     dNames[j] = studentNames[i];
//     j++;
//   }
//   i++;
// }
// console.log(dNames);
// let students = [
//   "Batsukh",
//   "Narandelgerekh",
//   "Nomin",
//   "Murun",
//   "Baynmunkh",
//   "Munkhsuld",
//   "Usukhbayr",
//   "Namnantseren",
//   "Ynchir",
//   "Uuganerdene",
//   "Munkhbat",
//   "Jamiyanpurew",
//   "Enkhtuul",
//   "Batnyam",
//   "Sharawnymbuu",
//   "Otgonbayr",
//   "Baljinnyam",
//   "Maral",
//   "Munkhtulga",
//   "Ylalt",
// ];
// let i = 1;
// let lName = students[0];
// let max = lName.length;
// while (i < students.length) {
//   if (max < students[i].length) {
//     lName = students[i];
//     max = students[i].length;
//     i++;
//   } else {
//     i++;
//   }
// }
// console.log(lName);

// let x = [[1,2,3], [4,5,6,],[7,8,9]];
// for (let i =0; i<x.length; i++){
//   for(let j= 0; j<x[0].length; j++){
//     console.log(x[i][j]);
//   }

// }
let now = new Date();
console.log(now); //Yg odoogiin tsagiig gargaj irne.//яг одоогын цагыг гаргаж ирнэ

let Jan01_1970 = new Date(0);
console.log(Jan01_1970); ////epoch date буюу компютерын хувьд 00:00:00 (тоолж эхэлсэн цаг

let Dec31_1969 = new Date(-24 * 3600 * 1000);
console.log(Dec31_1969); // 31 Dec 1969

let date = new Date("2017-01-26");
console.log(date);

// // одоогын цаг
// let date1 = new Date();
// // тухайн цагыг бүсийн одоогын цаг
// console.log(date1.getHours(date1));
// // let today = new Date();
// // today.setHours(0);
// // alert(today); // өнөөдөр хэвээрээ гэхдээ цаг нь 0 болсон
// // today.setHours(0, 0, 0, 0);
// // alert(today); // өнөөдөр хэвээрээ гэхдээ яг 00:00:00 болж байг
// let date2 = new Date(2016, 1, 28);
// date2.setDate(date2.getDate() + 2);
// console.log(date2); // 1 Mar 2016
