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
});
