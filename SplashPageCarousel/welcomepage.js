const nextButtons = document.querySelectorAll(".nextButton");
const carousel = new bootstrap.Carousel(
  document.getElementById("carouselExample"),
  {
    interval: false,
  }
);

nextButtons.forEach((button, index) => {
  if (index < nextButtons.length - 2) {
    button.addEventListener("click", () => {
      carousel.next();
    });
  }
});

const change_bg = function () {
  const primoElement = document.getElementById("primo");
  const secondoElement = document.getElementById("secondo");

  if (primoElement.classList.contains("active")) {
    console.log("Elemento con id primo");
    document.documentElement.style.background =
      "linear-gradient(255.55deg, #381a06c9 0%, #181818 100%)";
    console.log("fatto");
  }

  if (secondoElement.classList.contains("active")) {
    console.log("Elemento con id secondo");
    document.documentElement.style.background =
      "linear-gradient(255.55deg, #b8afa9c9 0%, #181818 100%)";
    console.log("fatto 2");
  }
};
