// ID;
let getId = document.getElementById("dumdum");

let count = 100;
let noo = 100;
let i = 100;
let h = 5;
//CLASS
document.getElementsByClassName("dummmy")[0].innerHTML =
  " Hey, How's going maan";
//query
document.querySelector(".dummmy").style.border = "2px solid black";
//Elements
document.getElementsByTagName("div")[0].style.margin = "50px";
//
let intrrval = setInterval(
  function () {
    getId.style.width = `${count}px`;
    count++;
    if (count == 1000) {
      clearInterval(intrrval);
    }
    getId.style.height = `${noo}px`;
    noo++;
    if (noo == 500) {
      clearInterval(intrrval);
    }
    getId.style.backgroundColor = `rgb(${i},${h} , 100)`;
    i++;
    h++;
  },

  10
);
