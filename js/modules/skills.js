export function initSkills() {
  const bars = document.querySelectorAll(".progress-bar");

  if (!bars.length) return; // Falls keine Skills auf der Seite sind

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const value = entry.target.dataset.skill;
        entry.target.style.width = value + "%";
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.3
  });

  bars.forEach(bar => observer.observe(bar));
}
