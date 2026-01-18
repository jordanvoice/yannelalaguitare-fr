function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header-container", "header.html");
    loadHTML("footer-container", "footer.html");
});

/* EVENT DELEGATION — BURGER */
document.addEventListener("click", (e) => {
    const burger = e.target.closest("#burger");
    if (!burger) return;

    const navLinks = document.getElementById("nav-links");
    if (!navLinks) return;

    navLinks.classList.toggle("active");
    burger.classList.toggle("open");
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contact-form");
    if (!form) return;

    form.addEventListener("submit", async (e) => {
        e.preventDefault();

        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            window.location.href = "/merci.html";
        } else {
            alert("Une erreur est survenue. Merci de réessayer.");
        }
    });
});
