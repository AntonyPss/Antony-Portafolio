// Theme Toggle Logic (runs immediately to prevent background flash)
const currentTheme = localStorage.getItem("theme") || "light";
if (currentTheme === "dark") {
    document.documentElement.setAttribute("data-theme", "dark");
}

// Menu Toggle
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");

    if (navMenu.classList.contains("active")) {
        menuIcon.classList.replace("ri-menu-line", "ri-close-line");
    } else {
        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    }
});

// Close menu when clicking links
document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", () => {
        navMenu.classList.remove("active");
        menuIcon.classList.replace("ri-close-line", "ri-menu-line");
    });
});

// Header Scroll Effect
window.addEventListener("scroll", function () {
    const header = document.getElementById("header");
    if (window.scrollY > 20) {
        header.classList.add("header-scrolled");
    } else {
        header.classList.remove("header-scrolled");
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // Theme Toggle Click Handler
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        const themeIcon = themeToggle.querySelector("i");

        // Sync icon state with current theme on page load
        if (document.documentElement.getAttribute("data-theme") === "dark") {
            if (themeIcon) themeIcon.className = "ri-sun-line";
        }

        themeToggle.addEventListener("click", () => {
            if (
                document.documentElement.getAttribute("data-theme") === "dark"
            ) {
                document.documentElement.removeAttribute("data-theme");
                localStorage.setItem("theme", "light");
                if (themeIcon) themeIcon.className = "ri-moon-line";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                localStorage.setItem("theme", "dark");
                if (themeIcon) themeIcon.className = "ri-sun-line";
            }
        });
    }

    // Neko Image Cursor Easter Egg
    const trigger = document.querySelector(".neko-trigger");
    const nekoImg = document.getElementById("neko-img");

    if (trigger && nekoImg) {
        trigger.addEventListener("mouseenter", () => {
            nekoImg.classList.add("is-visible");
        });

        trigger.addEventListener("mousemove", (e) => {
            const x = e.clientX;
            const y = e.clientY;

            nekoImg.style.left = `${x - 40}px`;
            nekoImg.style.top = `${y - 90}px`;
        });

        trigger.addEventListener("mouseleave", () => {
            nekoImg.classList.remove("is-visible");
        });
    }

    // Scroll Animation Observer
    const observerOptions = {
        threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");

                // If technologies section is visible, animate progress bars
                if (entry.target.id === "technologies") {
                    const bars = entry.target.querySelectorAll(
                        ".tech-level-progress",
                    );
                    bars.forEach((bar) => {
                        const targetWidth = bar.getAttribute("data-width");
                        bar.style.width = `${targetWidth}%`;
                    });
                }
            }
        });
    }, observerOptions);

    const sections = ["technologies", "projects", "donations", "contact"];
    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    // Animate Hero Content on Load
    setTimeout(() => {
        const hero = document.getElementById("hero-content");
        if (hero) hero.classList.add("is-visible");
    }, 100);

    // Dynamic Projects Data
    const previewItems = [
        {
            cover: "images/projects/tic-tac-toe.webp",
            title: "Tic-Tac-Toe",
            message:
                "El clásico juego de estrategia reinventado con lógica de programación pura y un sistema de victoria impecable para dos jugadores.",
            page: "https://antonypss.github.io/Tic-Tac-Toe/",
            date: "13 de Abril, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "images/projects/weather-app.webp",
            title: "Weather App",
            message:
                "Consulta el estado del tiempo en tiempo real. Diseño limpio centrado en la legibilidad y el uso de APIs meteorológicas externas.",
            page: "https://antonypss.github.io/Weather-App/",
            date: "20 de Noviembre, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "images/projects/antony-community.jpg",
            title: "Antony Community",
            message:
                "El punto de encuentro para mi comunidad. Mira mis proyectos relacionados al mundo de los bloques.",
            page: "https://antonypss.github.io/Antony-Projects/",
            date: "4 de Enero, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "images/projects/lonely-vibes.jpg",
            title: "Dance of the Lonely",
            message:
                "Una experiencia visual y sonora basada en el popular meme. Diseño minimalista con animaciones sincronizadas.",
            page: "https://antonypss.github.io/Dance-of-the-lonely/",
            date: "12 de Noviembre, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "images/projects/cat-explorer.jpg",
            title: "Mewmory",
            message:
                "Un rincón interactivo para los amantes de los felinos. Galería dinámica con datos curiosos y una interfaz suave diseñada para el relax.",
            page: "https://cat-page-antonypss.vercel.app/",
            date: "18 de Octubre, 2025",
            tag: "HTML/CSS/JS",
        },
    ];

    const previewList = document.getElementById("projects-grid");
    if (previewList) {
        const fragment = document.createDocumentFragment();

        previewItems.forEach((item) => {
            const card = document.createElement("div");
            card.className = "project-card";

            // Image wrapper & Image
            const imgWrapper = document.createElement("div");
            imgWrapper.className = "project-image-wrapper";

            const img = document.createElement("img");
            img.src = item.cover;
            img.alt = item.title;
            img.className = "project-image";
            imgWrapper.appendChild(img);
            card.appendChild(imgWrapper);

            // Card Body Container
            const cardBody = document.createElement("div");
            cardBody.className = "project-card-body";

            // Title and Tag
            const titleTagContainer = document.createElement("div");
            titleTagContainer.className = "title-tag-container";

            const title = document.createElement("h3");
            title.className = "project-title";
            title.textContent = item.title;
            titleTagContainer.appendChild(title);

            const tag = document.createElement("span");
            tag.className = "project-tag";
            tag.textContent = item.tag || "Web App";
            titleTagContainer.appendChild(tag);

            cardBody.appendChild(titleTagContainer);

            // Description
            const description = document.createElement("p");
            description.className = "project-description";
            description.textContent = item.message;
            cardBody.appendChild(description);

            // Footer
            const footer = document.createElement("div");
            footer.className = "card-footer";

            // Link Button
            const link = document.createElement("a");
            link.href = item.page;
            link.className = "project-link btn-secondary";
            link.title = `Ver ${item.title}`;
            link.textContent = "Ver proyecto";
            footer.appendChild(link);

            // Date Tag
            const dateTag = document.createElement("div");
            dateTag.className = "card-date-tag";

            const dateIcon = document.createElement("i");
            dateIcon.className = "ri-calendar-line";

            const dateSpan = document.createElement("span");
            dateSpan.textContent = item.date;

            dateTag.appendChild(dateIcon);
            dateTag.appendChild(dateSpan);
            footer.appendChild(dateTag);

            cardBody.appendChild(footer);
            card.appendChild(cardBody);
            fragment.appendChild(card);
        });

        previewList.appendChild(fragment);
    }
});

// Technologies Data with Soft Warm Earth Colors
const technologies = [
    {
        name: "HTML5",
        level: "Básico",
        progress: 65,
        icon: "ri-html5-fill",
        color: "#d46c4e",
    },
    {
        name: "CSS3",
        level: "Básico",
        progress: 60,
        icon: "ri-css3-fill",
        color: "#7890a8",
    },
    {
        name: "JavaScript",
        level: "Principiante",
        progress: 50,
        icon: "ri-javascript-fill",
        color: "#cda45c",
    },
    {
        name: "NodeJS",
        level: "Principiante",
        progress: 40,
        icon: "ri-nodejs-fill",
        color: "#8ba870",
    },
    {
        name: "GitHub",
        level: "Intermedio",
        progress: 55,
        icon: "ri-github-fill",
        color: "#333533",
    },
];

function renderTechList() {
    const container = document.getElementById("tech-list");
    if (!container) return;

    const fragment = document.createDocumentFragment();

    technologies.forEach((tech) => {
        const techCard = document.createElement("div");
        techCard.className = "tech-card";

        // Header info containing icon and titles
        const headerInfo = document.createElement("div");
        headerInfo.className = "tech-header-info";

        const icon = document.createElement("i");
        icon.className = `${tech.icon} tech-icon`;
        icon.style.color = tech.color;

        const infoDiv = document.createElement("div");
        infoDiv.className = "tech-info";

        const nameSpan = document.createElement("span");
        nameSpan.className = "tech-name";
        nameSpan.textContent = tech.name;

        const levelSpan = document.createElement("span");
        levelSpan.className = "tech-level";
        levelSpan.textContent = tech.level;

        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(levelSpan);
        headerInfo.appendChild(icon);
        headerInfo.appendChild(infoDiv);
        techCard.appendChild(headerInfo);

        // Progress Bar
        const levelBar = document.createElement("div");
        levelBar.className = "tech-level-bar";

        const progressDiv = document.createElement("div");
        progressDiv.className = "tech-level-progress";
        progressDiv.setAttribute("data-width", tech.progress);

        levelBar.appendChild(progressDiv);
        techCard.appendChild(levelBar);

        fragment.appendChild(techCard);
    });

    container.innerHTML = "";
    container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderTechList);
