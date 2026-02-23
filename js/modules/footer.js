export function renderFooter() {
    return `
        <footer class="footer">
            <div class="footer-container">

                <div class="footer-brand">
                    <h3>Uwe Kremer</h3>
                    <p>Frontend Developer  · JavaScript · HTML · CSS</p>
                </div>

                <div class="footer-contact">
                    <h4>Contact Me</h4>
                    <form action="mailto:uwekremer1971@gmx.de" method="post" enctype="text/plain">
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
}

/*export function renderFooter() {
    return `
    
        <section class="contact">
            <h2>Contact Me</h2>
            <p>If you'd like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p>
            <ul>
                <li>Email: <a href="mailto:uwekremer1971@gmx.de">uwekremer1971@gmx.de</a></li>
            </ul>
        </section>

    <p>© ${new Date().getFullYear()} Uwe Kremer. Alle Rechte vorbehalten.</p>
    `;
}*/