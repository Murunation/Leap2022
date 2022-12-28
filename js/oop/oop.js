class Student {
  constructor(incomingName, incomingSurName, age, gender) {
    this.name = incomingName;
    this.surname = incomingSurName;
    this.age = age;
    this.gender = gender;
  }
  name;
  surname;
  age;
  gender; //iim field uud baigaa.
}

//creating new student with initial properties
let bat = new Student("Bataa", "Tsogtoo");
console.log(bat);

let students = [
  {
    name: "dorjoo",
    age: 21,
    grade: 100,
  },
  {
    name: "Bataa",
    age: 20,
    grade: 80,
  },
];

let oopStudents = students.map(
  (student) => new Student(student.name, student.age, student.grade)
);
console.log(oopStudents[1].name);

// extends
class Animal {
  constructor(type, age, gender) {
    this.type = type;
    this.age = age;
    this.gender = gender;
  }
  type;
  age;
  gender;
}
class Dog extends Animal {
  constructor(breed, name, type, age, gender) {
    super(type, age, gender);
    this.breed = breed;
    this.name = name;
  }
}
let Dogs = new Dog("Bulldog", "Dorjoo", "Dog", 15, "male");
console.log(Dogs);
