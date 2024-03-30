// loadNavigation.js
document.addEventListener("DOMContentLoaded", function() {
    // Fetch the navigation HTML file
    fetch("header.html")
        .then(response => response.text())
        .then(html => {
            // Inject the navigation into the appropriate element
            document.querySelector("nav").innerHTML = html;
        })
        .catch(error => {
            console.error("Error loading navigation:", error);
        });
});
