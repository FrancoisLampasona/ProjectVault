const form = document.querySelector("form");
const searchInput = document.getElementById("search-input");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputValue = searchInput.value;
  RicercaElements(inputValue);
});

const RicercaElements = function (SearchKey) {
  const URL = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${SearchKey}`;

  fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Errore nella risposta");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Dati ricevuti:", data);
      creaRisultati(data.data);
    })
    .catch((error) => {
      console.error("C'è stato un errore:", error.message);
    });
};

const creaRisultati = function (data) {
  const controllaRisultatiPrsenti = document.getElementById("RisultatiRicerca");

  if (controllaRisultatiPrsenti) {
    controllaRisultatiPrsenti.innerHTML = "";
  }

  const Category = document.getElementById("Category");
  Category.style.display = "none";
  const SearchContainer = document.getElementById("SearchContainer");
  const ContenitoreResult = document.createElement("div");
  ContenitoreResult.className = "container-fluid";
  ContenitoreResult.id = "RisultatiRicerca";
  const RowResult = document.createElement("div");
  RowResult.className = "row";

  SearchContainer.appendChild(ContenitoreResult);
  ContenitoreResult.appendChild(RowResult);

  data.forEach((element) => {
    const resultDiv = document.createElement("div");
    resultDiv.className = "col-6 col-sm-6 col-md-4 col-lg-3 mb-4";
    resultDiv.innerHTML = `
              <a href="./album-page.html?=${element.album.id}" class="text-decoration-none">
              <div class="card bg-danger text-white h-100">
                <img
                  class="img-fluid"
                  src="${element.album.cover_big}"
                  alt="${element.title_short}"
                />
                <p class="text-center position-relative mt-4 fw-bold fs-5"> ${element.title_short}</p>
                <div class="d-flex justify-content-evenly text-center flex-wrap">
                  <p style="flex-basis: 100%" class>${element.album.title}</p>
                  <p class="text-secondary fst-italic">${element.artist.name}</p>
                </div>
              </div>
              </a>
    `;
    RowResult.appendChild(resultDiv);
    form.classList.add("mb-4");
  });
};

const inputSearch = document.getElementById("search-input");
const Category = document.getElementById("Category");

inputSearch.addEventListener("input", () => {
  if (inputSearch.value.trim() === "") {
    Category.style.display = "flex";
    const controllaRisultatiPrsenti =
      document.getElementById("RisultatiRicerca");
    if (controllaRisultatiPrsenti) {
      controllaRisultatiPrsenti.remove();
    }
  }
});
