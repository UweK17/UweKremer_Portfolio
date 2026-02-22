export function initFotoImage() {
  const img = document.querySelector('.foto-image img');
  if (!img) return;

  setTimeout(() => {
    img.classList.add('visible');
  }, 300);
}