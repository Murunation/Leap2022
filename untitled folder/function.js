fetch("https://91b1-66-181-164-191.ap.ngrok.io/api/cars", {
  method: "DELETE",
  body: {
    id: 1,
  },
});
fetch("https://91b1-66-181-164-191.ap.ngrok.io/api/cars")
  .then((res) => res.json())
  .catch((res) => console.log(res));
