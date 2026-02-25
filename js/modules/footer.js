export function renderFooter() {

    return `
        <footer class="footer">
            <div class="footer-container">

                <div class="footer-left">
                    <div class="footer-brand">
                        <h3>Uwe Kremer</h3>
                        <p>Frontend Developer · JavaScript · HTML · CSS · PHP · Python</p>
                    </div>

                    <div class="footer-legal">
                        <a href="impressum.html" target="_blank">Impressum</a> |
                        <a href="datenschutz.html" target="_blank">Datenschutz</a>
                    </div>
                </div>
                
                <div class="footer-contact">
                    <h4>Contact Me</h4>
                    <form action="https://formspree.io/f/xrearjkg" target="_blank" method="POST">
                        <input type="text" name="name" placeholder="Name" required>
                        <input type="email" name="email" placeholder="E-Mail" required>
                        <textarea name="message" placeholder="Nachricht" required></textarea>
                        <button type="submit">E-Mail senden</button>
                    </form>
                </div>
            </div>

            <div class="footer-bottom">
                <p>© ${new Date().getFullYear()} Uwe Kremer. Alle Rechte vorbehalten.</p>
            </div>

        </footer>
    `;
};

export function renderEmail() {
    const user = "uwekremer1971";
    const domain = "gmx.de";

    const emailSpan = document.getElementById('email');
    if (emailSpan) {
        emailSpan.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    }
}