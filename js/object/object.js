let athletics = [
  {
    name: "Skyler",
    age: 21,
    country: "USA",
    record: [10, 15, 20, 35, 60],
  },
  {
    name: "Walter",
    age: 51,
    country: "Mexico",
    record: [20, 30, 50, 35, 70, 80],
  },
  {
    name: "Bat",
    age: 44,
    country: "Mongolia",
    record: [10, 15, 20, 35],
  },
  {
    name: "Hank",
    age: 46,
    country: "USA",
    record: [50, 70, 30, 35, 60, 70],
  },
];

getAllInfo(athletics);
function allNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
    names.push(list[i].name);
  }
  return names;
}

// function avgAge(average) {
//   let S = 0;
//   let count = 0;
//   for (i = 0; i < average.length; i++) {
//     S = S + average[i].age;
//     count++;
//   }
//   return Math.round(S / count);
// }
// function avgSpd(average) {
//   let S = 0;
//   let count = 0;
//   for (i = 0; i < average.length; i++) {
//     S = S + average[i].record[i];
//     count++;
//   }
//   return Math.round(S / count);
// }
// console.log(avgSpd(athletics));
// console.log(avgAge(athletics));
// console.table(athletics);
