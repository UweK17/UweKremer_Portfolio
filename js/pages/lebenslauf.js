export function initLebenslauf() {
    console.log("Lebenslauf geladen");
};

export function initTimeline() {
    const items = document.querySelectorAll('.timeline-item');

    items.forEach((item) => {
        item.addEventListener('click', () => {
            if(item.classList.contains('collapsible')) {

                const collapsibles = document.querySelectorAll('.timeline-item.collapsible');
                const isActive = item.classList.contains('active');

                collapsibles.forEach((collapsible) => {
                    collapsible.classList.remove('active');
                });
                if (!isActive) {
                    item.classList.add('active');
                }
            } else {
                item.classList.toggle('active');
            }
        });
    });
};

