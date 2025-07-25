// Función para el menú
function menuButton() {
    const navMenu = document.querySelector(".header-nav");
    const menuBtn = document.querySelector(".menu");

    navMenu.classList.toggle("active");
    menuBtn.classList.toggle("active");
}

// Función para el tema claro/oscuro
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.getElementById("themeButton");

    // Verificar ajustes guardados
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.body.classList.toggle("light-theme", savedTheme === "light");

    themeButton.addEventListener("click", () => {
        document.body.classList.toggle("light-theme");
        const currentTheme = document.body.classList.contains("light-theme")
            ? "light"
            : "dark";
        localStorage.setItem("theme", currentTheme);
    });

    // Smooth scrolling para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href");
            if (targetId === "#") return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                });

                // Cerrar menú móvil si está abierto
                const navMenu = document.querySelector(".header-nav");
                const menuBtn = document.querySelector(".menu");
                if (navMenu.classList.contains("active")) {
                    navMenu.classList.remove("active");
                    menuBtn.classList.remove("active");
                }
            }
        });
    });

    // Animación de elementos al hacer scroll
    const animateOnScroll = () => {
        const elements = document.querySelectorAll(
            ".personal-info, .languages, .projects-grid, .about-section, .contact"
        );

        elements.forEach((element) => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 100) {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }
        });
    };

    // Ejecutar al cargar y al hacer scroll
    window.addEventListener("load", animateOnScroll);
    window.addEventListener("scroll", animateOnScroll);
});
