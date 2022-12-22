let foods = [
  {
    name: "baked beans",
    price: 0.4,
    image: "beans.jpg",
    type: "vegetables",
  },
  {
    name: "hot dogs",
    price: 1.99,
    image: "hotdogs.jpg",
    type: "meat",
  },
  {
    name: "spam",
    price: 2.85,
    image: "spam.jpg",
    type: "meat",
  },
  {
    name: "refried beans",
    price: 0.99,
    image: "refried.jpg",
    type: "vegetables",
  },
  {
    name: "kidney beans",
    price: 0.58,
    image: "kidney.jpg",
    type: "vegetables",
  },
  {
    name: "garden peas",
    price: 0.52,
    image: "gardenpeas.jpg",
    type: "vegetables",
  },
  {
    name: "mushy peas",
    price: 0.58,
    image: "mushypeas.jpg",
    type: "vegetables",
  },
  {
    name: "corned beef",
    price: 2.39,
    image: "cornedbeef.jpg",
    type: "meat",
  },
  {
    name: "tomato soup",
    price: 1.4,
    image: "tomatosoup.jpg",
    type: "soup",
  },
  {
    name: "chopped tomatoes",
    price: 0.45,
    image: "tomato.jpg",
    type: "vegetables",
  },
  {
    name: "chicken noodle soup",
    price: 1.89,
    image: "chickennoodle.jpg",
    type: "soup",
  },
  {
    name: "carrot and coriander soup",
    price: 1.49,
    image: "carrotcoriander.jpg",
    type: "soup",
  },
];

// MAP SORT FILTER

let names = ["bataa", "tsetsgee", "bold", "ariunaa"];

//FILTER
let cheap = foods.filter((food) => {
  console.log("End olon uildel hiiwel iimerhu baidlaar bichne.");
  return food.price < 1;
}); // Arrow function returns boolean
let cheap1 = foods.filter((food) => food.price < 1); //array function returns boolean // Harin neg uildel hiiwel iim baidlaar

function customFiler(a) {
  // First version but nadd uur gazar hereggu.
  const cheap = a.price < 1;
  return cheap;
}
//SORT
let sortedNames = names.sort((name) => {
  if (name[0] == "b") {
    return 10;
  } else {
    return -10;
  }
}); // Arrow function returns number (positive || negative)
//Example
let numbers = [1, 2, 4, , 232, 43, 54, 23, , 41, 42, 121];
numbers.sort((a, b) => a - b); // Arrow function returns number (positive || negative)
console.log(numbers);

//MAP returns anything
let prices = foods.map((food) => food.price);
console.log(prices);
let newFoods = foods.map((food) => [food.price, food.type]);
console.log(newFoods);

//challenge
let orchuulga = [
  { ner: "baked beans", une: 0.4 },
  { ner: "hot dog", une: 0.99 },
];
let newFoods2 = foods.map((food) => ({
  ner: food.name,
  une: food.price,
}));
console.log(newFoods2);
