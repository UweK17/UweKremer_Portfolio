import { renderNavigation } from "./modules/navigation.js";
import { renderFooter } from "./modules/footer.js";
import { initContactForm } from "./modules/contactForm.js";
import { initScrollAnimations} from "./modules/scrollAnimations.js";
import { initLebenslauf } from "./pages/lebenslauf.js";
import { initThemeToggle } from "./modules/theme.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    
    if (header) {
        header.innerHTML = renderNavigation();
    }
    if (footer) {
        footer.innerHTML = renderFooter();
    }
    if(document.body.dataset.page === "lebenslauf") {
        initLebenslauf();
    }

    initContactForm();
    initScrollAnimations();
    initThemeToggle();
});