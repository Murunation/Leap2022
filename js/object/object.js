let athletics = [
  {
    name: "Skyler",
    age: 21,
    country: "USA",
    record: [10, 15, 20, 35],
  },
  {
    name: "Walter",
    age: 51,
    country: "Mexico",
    record: [20, 30, 50],
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
    record: [50, 70],
  },
];

// getAllInfo(athletics);

function allNames(list) {
  let names = [];
  for (i = 0; i < list.length; i++) {
    names.push(list[i].name);
  }
  return names;
}

function avgSec(list) {
  let avgList = [];
  for (i = 0; i < list.length; i++) {
    //list.length = 5 (hunii too)
    let sum = 0;
    for (j = 0; j < list[i].record.length; j++) {
      sum += list[i].record[j];
    }
  }
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
