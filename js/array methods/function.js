const register = ["Ukh", "Che"];
console.log(register.includes("Ukh"));

//AT
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(arr[0]); //1
console.log(arr.at(0)); //1
//CONCAT
const array1 = ["a", "b", "c"];
const array2 = ["d", "e", "f"];
const array3 = array1.concat(array2);
const array4 = array1 + array2;
console.log(array3); //output: array [ 'a', 'b', 'c', 'd', 'e', 'f' ]
console.log(array4); //output: array [ 'a', 'b', 'c', 'd', 'e', 'f' ]

//INCLUDES (array dotroos haij bgaa utga baigaa esehiiig shalgana.)
const array11 = [1, 2, 3];
console.log(array11.includes(2)); //true

const pets = ["cat", "dor", "fish"];
console.log(pets.includes("cat")); //true
console.log(pets.includes("mouse")); //false

//INDEXOF
const animals = ["wolf", "camel", "duck", "cat", "camel"];
console.log(animals.indexOf("camel")); //1

//search on 2nd index
console.log(animals.indexOf("camel", 2)); //4

//If it is not return -1
console.log(animals.indexOf("giraffe")); //-1

//JOIN
const jiguurten = ["Elee", "Heree", "Galuu"];
console.log(jiguurten.join()); // "Elee,Heree,Galuu"
console.log(jiguurten.join("")); // "EleeHereeGaluu"
console.log(jiguurten.join("-")); // "Elee-Heree-Galuu"

//POP delete last array
const arrar = [0, 1, 2, 3, 4];
const poppedValue = arrar.pop();
console.log(poppedValue); // 4
console.log(arrar); // Array [0,1,2,3]
arrar.pop();
console.log(arr); // Array [0,1,2]

//PUSH add the last array
const animal = ["galuu", "uher", "honi"];
const count = animal.push("yamaa");
console.log(count);
// 4
console.log(animal);
// Array ["galuu", "uher", "honi", "yamaa"]
animal.push("tahia", "muur", "nohoi");
console.log(animal);
// Array ["galuu", "uher", "honi", "yamaa", "tahia", "muur", "Nohoi"]

//SHift delete first element of array
const arrer = [1, 2, 3];
const firstElement = arrer.shift();
console.log(arrer); // [2,3]
console.log(firstElement); //1

//UNSHIFT add first
const array22 = [2, 3, 4];
console.log(array22.unshift(4, 5)); //5
console.log(array22); //[ 4, 5, 2, 3, 4 ]

//SORT
const names = ["Marlaa", "Javkhaa", "Erdene", "Dorj"];
names.sort();
console.log(names); //[ 'Dorj', 'Erdene', 'Javkhaa', 'Marlaa' ]

const arrayS = [1, 30, 4, 21, 100000];
arrayS.sort();
console.log(arrayS); //[ 1, 100000, 21, 30, 4 ]

//REVERSE

const array111 = ["one", "two", "three"];
console.log("array1:", array111);
// "array1:" Array ["one", "two", "three"]
const reversed = array111.reverse();
console.log("reversed:", reversed);
// "reversed:" Array ["three", "two", "one"]
console.log("array1:", array111);
// "array1:" Array ["three", "two", "one"]

//SLICE

const arrarS = ["bat", "dorj", "purev", "davaa", "tomor"];
console.log(arrarS.slice(2)); //2-p index hurtel tasdaj awna.
console.log(arrarS.slice(2, 4)); //2-p index-ees 4 hurtel awna.
console.log(arrarS.slice(-2)); //hoinooosoo 2-p indexees ehlen tasdaj awna.

//SPLICE

const arrRR = ["Davaa", "Lkhagva", "Purev", "Byamba"];
arrRR.splice(1, 0, "Myagmar");
// 1 дэх индекс дээр шинээр утга нэмэх үйлдэл
console.log(arrRR);
// ["Davaa", "Myagmar", "Lkhagva", "Purev", "Byamba"]
arrRR.splice(4, 1, "Baasan");
// 4 дөх индекс дэх утгыг солиж байна
console.log(arrRR);
// ["Davaa", "Myagmar", "Lkhagva", "Purev", "Baasan"]

//SPLIT TUHAIN STRING IIG TOD ZAASAN PATTERN BUREER TASDAJ WHINE ARREY UUSGENE.
const str = "Arvan tavan targan tarvaga";
const words = str.split(" ");
console.log(words);
// ["Arvan", "tavan", "targan", "tarvaga"]
const chars = str.split("");
console.log(chars[1]); // "r"

const strCopy = str.split();
console.log(strCopy); // ["Arvan tavan targan tarvaga"]
//REPLACE & REPLACEALL

const p = "she sells seashells by the seashore";
console.log(p.replace("sea", "wind")); //JUST ONE
// "she sells windshells by the seashore"
console.log(p.replaceAll("sea", "wind")); // ALL
// "she sells windshells by the windshore"
