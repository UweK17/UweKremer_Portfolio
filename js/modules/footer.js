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
                    <form id="contract-form" novalidate>
                        
                        <div class="form-group">
                            <input type="text" id="name" name="name" placeholder="Your Name" required>
                        </div>
                            
                        <div class="form-group">
                            <input type="email" id="email" name="email" placeholder="Your Email" required>
                        </div>
                            
                        <div class="form-group">
                            <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </div>

                        <!-- Spam_Schutz -->
                        <div class="hidden-field">
                            <input type="text" name="trapField" tabindex="-1" autocomplete="off">
                        </div>

                        <button type="submit">Send Message</button>
                        <p class="form-status"></p>

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