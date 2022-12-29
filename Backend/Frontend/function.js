let button = document.getElementById("buttn");
button.addEventListener("click", () => {
  fetch("http://localhost:3333/api/users")
    .then((res) => res.json())
    .then((res) => {
      root.innerHTML = "";
      res.map((users) => {
        let newCard = document.createElement("div");
        newCard.innerHTML = `<div class="card" style="width: 18rem;">
          <div class="card-body"> 
          <img src="https://www.w3schools.com/bootstrap5/img_avatar3.png" class="card-img-top" alt="...">
          <div class="card">
          <p>ID: ${users.id}</p>
          <h4 class="card-title">Name: ${users.name} ${users.surName}</h4>
            <h4 >Balance: ${users.balance}</h4>
            <p class="card-text"></p>
          </div>
            
          </div>
        </div>`;
        root.appendChild(newCard);
        console.log(res);
      });
    });
});
