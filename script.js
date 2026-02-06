const elements = document.querySelectorAll('.fade-in');

window.addEventListener('load', () => {
  elements.forEach(el => {
    el.classList.add('show');
  });
});
