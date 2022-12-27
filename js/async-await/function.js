// async function fryegg() {
//   return 100;
// }
// let result = fryegg();
// console.log(result);

// result.then((res) => {
//   console.log(res);
// });

// fryegg().then((res) => console.log(res));

function prepare_breakfast() {
  let coffee_promise = new Promise((resolve, reject) =>
    resolve("coffee ready")
  );
  let egg_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Finished frying egg");
    }, 1000);
  });
  let bacon_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bacon ready");
    }, 1500);
  });
  let toast_promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Bread ready");
    }, 3000);
  });
  let jam_promise = new Promise((resolve, reject) => resolve("Jam on bread"));
  let pour_promise = new Promise((resolve, reject) => resolve("Juice ready"));
  let combined_promise = Promise.all([
    coffee_promise,
    egg_promise,
    bacon_promise,
    toast_promise,
    jam_promise,
    pour_promise,
  ]);
  return combined_promise;
}
async function morning() {
  let result = await prepare_breakfast();
  console.log(result);
}
morning();
