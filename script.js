document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll(".fade-in");
  const heroFlower = document.querySelector(".hero-flower");
  const body = document.body;

  elements.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");

      // Phase transitions
      if (i === 2) body.className = "phase-sunset";
      if (i === 6) body.className = "phase-dusk";
      if (i === 6) heroFlower.classList.add("show");

    }, i * 900);
  });
});
