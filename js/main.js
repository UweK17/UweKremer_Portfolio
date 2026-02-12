import { renderNavigation } from "./modules/navigation.js";
import { renderFooter } from "./modules/footer.js";
import { initContactForm } from "./modules/contactForm.js";

document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("header");
    const footer = document.getElementById("footer");
    
    if (header) {
        header.innerHTML = renderNavigation();
    }
    if (footer) {
        footer.innerHTML = renderFooter();
    }

    initContactForm();
});