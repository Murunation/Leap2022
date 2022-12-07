function addMeat() {
  const listItem = ["Milk", "Coffee", "Tea", "Honey"];
  listItem.unshift("Meat");
  console.log(listItem);
}
addMeat();

//Add sugar end of the list
function addSugar() {
  const listCard = ["Milk", "Coffee", "Tea", "Honey"];
  listCard.push("Sugar");
  console.log(listCard);
}
addSugar();
//Remove honey
function removeHoney() {
  const listC = ["Milk", "Coffee", "Tea", "Honey"];
  const popped = listC.pop();
  console.log(popped);
  console.log(listC);
}
removeHoney();
//Modify tea to green tea
function modiftyT() {
  const removeT = ["Milk", "Coffee", "Tea", "Honey"];
  removeT.splice(2, 1, "Green Tea");
  console.log(removeT);
}
modiftyT();
