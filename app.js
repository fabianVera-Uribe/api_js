const url =
  "https://larnu-dev-upy5mhs63a-rj.a.run.app/api/v1/categories?format=json";
const cardWrap = document.getElementById("card__wrap");

let fetchLarnu = () => {
  fetch(url)
    .then((response) => {
      return response.ok ? response.json() : Promise.reject(response);
    })
    .then((json) => {
      arrayObjetos = json.communityCategories;
      console.log(arrayObjetos);
      arrayObjetos.forEach((e) => {
        const div = document.createElement("DIV");
        div.classList.add("card");
        div.innerHTML = `
        <div class="card__imagen">
          <img class="img-logo" src="${e.icon}" />
        </div>
        <div>
          <h2 class="card__titulo">${e.name}</h2>
          <p class="card__quizzes">Total Quizzes: ${e.totalQuizzes}</p>
          <p class="card__usuarios">Usuarios: ${e.users}</p>
        </div>
        `;
        let backImg = document.querySelectorAll(".img-container");
        cardWrap.appendChild(div);
      });
    });
};

fetchLarnu();
