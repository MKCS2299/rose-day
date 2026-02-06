const steps = document.querySelectorAll(".fade-in");
const body = document.body;
const finalFlower = document.querySelector(".final-flower");
const finalLine = document.querySelector(".final-line");

let step = 0;
let flowerMoved = false;

document.body.addEventListener("click", (e) => {

  // Show text step-by-step
  if (step < steps.length) {
    steps[step].classList.add("show");

    // Switch to sunset halfway
    if (step === 3) {
      body.className = "phase-sunset";
    }

    step++;
    return;
  }

  // Show flower
  if (!finalFlower.classList.contains("show")) {
    finalFlower.classList.add("show");
    return;
  }

  // Move flower ONCE to cursor
  if (!flowerMoved) {
    flowerMoved = true;

    const container = document.querySelector(".final-flower-container");
    const rect = container.getBoundingClientRect();

    finalFlower.style.left = `${e.clientX - rect.left}px`;
    finalFlower.style.top = `${e.clientY - rect.top}px`;

    setTimeout(() => {
      finalLine.classList.add("show");
    }, 1800);
  }
});
