export function renderEmail() {
    const user = "uwekremer1971";
    const domain = "gmx.de";

    const emailSpan = document.getElementById('email');
    if (emailSpan) {
        emailSpan.innerHTML = `<a href="mailto:${user}@${domain}">${user}@${domain}</a>`;
    }
}