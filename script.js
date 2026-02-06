document.addEventListener("DOMContentLoaded", () => {
  const lines = document.querySelectorAll(".fade-in");
  const body = document.body;
  const tapHint = document.querySelector(".tap-hint");
  const finalFlower = document.querySelector(".final-flower");
  const finalLine = document.querySelector(".final-line");

  // Auto text reveal
  lines.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");

      // Switch to sunset mid-way
      if (i === 3) body.className = "phase-sunset";

      // After last line
      if (i === lines.length - 1) {
        setTimeout(() => {
          tapHint.classList.add("show");
          finalFlower.classList.add("show");
        }, 1200);
      }
    }, i * 900);
  });

  let flowerMoved = false;

  // One-time tap interaction
  document.body.addEventListener("click", (e) => {
    if (flowerMoved || !finalFlower.classList.contains("show")) return;
    flowerMoved = true;

    const container = document.querySelector(".final-flower-container");
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top - 40;

    finalFlower.style.left = `${x}px`;
    finalFlower.style.top = `${y}px`;

    // GUARANTEED final line reveal
    setTimeout(() => {
      finalLine.classList.add("show");
      tapHint.style.opacity = 0;
    }, 2000);
  });
});
