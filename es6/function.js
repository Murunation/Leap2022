fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  .then((fact) => fact.json())
  .then(hey)
  .catch((error) => console.error(error));
async function hey(data) {
  let numb = data.bpi.USD.rate;
  numb = numb.replace(",", "");
  numb = parseFloat(numb);
  console.log(numb < 16767.4156);
  if (numb < 16967.4156) {
    document.getElementById("root").innerHTML = ` <h1>Purchase bitcoin</h1>`;
  } else {
    document.getElementById("root").innerHTML = ` <h1>Wait a little</h1>`;
  }
}
