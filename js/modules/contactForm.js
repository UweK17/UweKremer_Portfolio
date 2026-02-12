export function initContactForm() {
    const form = document.getElementById('contract-form');
    if(!form) return;

    function isValidEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const status = form.querySelector('.form-status');

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Spam-Schutz: Überprüfen, ob das versteckte Feld ausgefüllt ist
        const trap = form.querySelector('input[name="trapField"]').value;

        if(trap) {
            return; // Trap wurde von einem Bot ausgefüllt, ignorieren
        }

        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if(!name || !email || !message) {
            status.textContent = 'Please fill in all fields.';
            status.style.color = 'red';
            return;
        }

        if(!isValidEmail(email)) {
            status.textContent = 'Please enter a valid email address.';
            status.style.color = 'red';
            return;
        }

        // Nur Info, da noch kein Backend angeschlossen ist
        status.textContent = 'Message sent successfully!';
        status.style.color = '#4ade80';

        form.reset();
    });
};