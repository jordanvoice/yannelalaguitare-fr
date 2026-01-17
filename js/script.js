function loadHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;

            // Réactiver le burger APRÈS chargement du header
            const burger = document.getElementById("burger");
            const navLinks = document.getElementById("nav-links");

            if (burger && navLinks) {
                burger.addEventListener("click", () => {
                    navLinks.classList.toggle("active");
                });
            }
        });
}

document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header-container", "header.html");
    loadHTML("footer-container", "footer.html");
});
