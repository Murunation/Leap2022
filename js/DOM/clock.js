let rootElement = document.getElementById("root");
let second = 0;
let minute = 0;
let hour = 0;
setInterval(function () {
  second++;
  if (second == 60) {
    second = 0;
    minute++;
  }
  rootElement.innerText = `00:${minute < 10 ? "0" : ""}${minute}:${second}`; ///ternary if(min<10) 0 else ""
}, 10);
