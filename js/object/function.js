// const person = {
//   name: ["Bob", "Smith"],
//   age: 32,
//   bio: function () {
//     console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
//   },
//   introduceSelf: function () {
//     console.log(`Hi! I'm ${this.name[0]}.`);
//   },
// };
// func = () => {
//   console.log("person");
// };
//Must call the func after
function getPerson() {
  console.log("person");
}
//OBJECT (Syntax)
//let object = {
//   key: value;
// }
let person = {
  firstname: "Walter",
  lastname: "White",
  age: 51,
  Score: [10, 20, 30, 40],
  isMarried: true,
  func: () => {
    console.log("person"); //Return eer hiine.
  },
  fullName: function () {
    return this.firstname + " " + this.lastname;
  },
  address: {
    country: "Mongolia",
    city: "UlaanBaatar",
  },
};
// console.log(person);
console.log(person.age); //Newtreh arga1
console.log(person["age"]); //Newtreh 2
console.log(person.func());
console.log(person.fullName());

// Copy the address //SPREAD OPERATOR
let person1 = {
  firstname: "Jesse",
};
let person2 = person1;
person2.firstname = "Pinkman";

console.log(person1.firstname);
//SPREAD OPERATOR
person2 = { ...person1 };
person2.firstname = "Mike";
console.log(person1.firstname);

console.log(person2.firstname);

let person3 = [10, 20, 30];
let person4 = [...person3];
person4[0] = 100;
console.log(person3);
console.log(person4);
//
