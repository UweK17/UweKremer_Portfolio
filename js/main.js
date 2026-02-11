import { renderHeader } from "./components/header.js";

document.addEventListener("DOMContentLoaded", () => {
    const headerPlaceholder = document.getElementById("header-placeholder");
    
    if (headerPlaceholder) {
        headerPlaceholder.innerHTML = renderHeader();
    }
});