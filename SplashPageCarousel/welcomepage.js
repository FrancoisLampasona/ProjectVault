document.addEventListener("DOMContentLoaded", function () {
  const nextButtons = document.querySelectorAll(".nextButton");
  const carousel = new bootstrap.Carousel(
    document.getElementById("carouselExample"),
    {
      interval: false, // Disabilita il cambiamento automatico
    }
  );

  nextButtons.forEach((button) => {
    button.addEventListener("click", () => {
      carousel.next(); // Avanza alla slide successiva
    });
  });
});
