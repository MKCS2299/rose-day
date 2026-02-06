document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".fade-in");
  const body = document.body;
  const tapHint = document.querySelector(".tap-hint");
  const finalFlower = document.querySelector(".final-flower");
  const finalLine = document.querySelector(".final-line");

  // AUTO TEXT SEQUENCE
  lines.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");

      // Switch to sunset mid-way
      if (i === 3) body.className = "phase-sunset";

      // After last line, show tap hint + flower
      if (i === lines.length - 1) {
        setTimeout(() => {
          tapHint.classList.add("show");
          finalFlower.classList.add("show");
        }, 1200);
      }
    }, i * 900);
  });

  let flowerMoved = false;

  // ONE-TIME TAP INTERACTION
  document.body.addEventListener("click", (e) => {
    if (flowerMoved || !finalFlower.classList.contains("show")) return;
    flowerMoved = true;

    const container = document.querySelector(".final-flower-container");
    const rect = container.getBoundingClientRect();

    finalFlower.style.left = `${e.clientX - rect.left}px`;
    finalFlower.style.top = `${e.clientY - rect.top}px`;

    setTimeout(() => {
      finalLine.classList.add("show");
      tapHint.style.opacity = 0;
    }, 1800);
  });
});
