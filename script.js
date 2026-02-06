document.addEventListener("DOMContentLoaded", () => {
  const fadeEls = document.querySelectorAll(".fade-in");
  const body = document.body;
  const finalFlower = document.querySelector(".final-flower");
  const finalLine = document.querySelector(".final-line");

  // Text + sunset timing
  fadeEls.forEach((el, i) => {
    setTimeout(() => {
      el.classList.add("show");

      // Switch to sunset mid-way
      if (i === 2) body.className = "phase-sunset";
    }, i * 900);
  });

  let flowerVisible = false;
  let flowerMoved = false;

  // Reveal flower near bottom
  window.addEventListener("scroll", () => {
    const trigger = document.body.scrollHeight - window.innerHeight - 200;
    if (!flowerVisible && window.scrollY > trigger) {
      flowerVisible = true;
      finalFlower.classList.add("show");
    }
  });

  // Flower comes to cursor ONCE
  window.addEventListener("mousemove", (e) => {
    if (!flowerVisible || flowerMoved) return;
    flowerMoved = true;

    const container = document.querySelector(".final-flower-container");
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    finalFlower.style.left = `${x}px`;
    finalFlower.style.top = `${y}px`;

    setTimeout(() => {
      finalLine.classList.add("show");
    }, 1800);
  });
});
