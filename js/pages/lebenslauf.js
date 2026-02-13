export function initLebenslauf() {
    console.log("Lebenslauf geladen");
};

export function initTimeline() {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            item.classList.toggle('active');
            console.log("Timeline-Item angeklickt: ", item.dataset.title);
        });
    });
};