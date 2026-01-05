// Menu Hide Header
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
    // Neko Image Cursor
    const trigger = document.querySelector(".neko-trigger");
    const nekoImg = document.getElementById("neko-img");

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

    // HTML Anims
    const observerOptions = {
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
            }
        });
    }, observerOptions);

    const sections = ["technologies", "projects", "contact"];
    sections.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
    });

    setTimeout(() => {
        document.getElementById("hero-content").classList.add("is-visible");
    }, 100);

    // Web Preview Content
    const previewItems = [
        {
            cover: "images/projects/tic-tac-toe.webp",
            title: "Tic-Tac-Toe",
            message:
                "El clásico juego de estrategia reinventado con lógica de programación pura y un sistema de victoria impecable para dos jugadores.",
            page: "#",
            date: "13 de Abril, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "images/projects/weather-app.webp",
            title: "SkyCast UI",
            message:
                "Consulta el estado del tiempo en tiempo real. Diseño limpio centrado en la legibilidad y el uso de APIs meteorológicas externas.",
            page: "#",
            date: "20 de Noviembre, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "https://placehold.co/100x100?text=No+Icon",
            title: "Antony Community",
            message:
                "El punto de encuentro para mi comunidad. Mira mis proyectos relacionados al mundo de los bloques.",
            page: "https://antonypss.github.io/Antony-Projects/",
            date: "4 de Enero, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "https://placehold.co/100x100?text=No+Icon",
            title: "Lonely Vibes",
            message:
                "Una experiencia visual y sonora basada en el popular meme. Diseño minimalista con animaciones sincronizadas.",
            page: "https://lonely-dance.vercel.app/",
            date: "12 de Noviembre, 2025",
            tag: "HTML/CSS/JS",
        },
        {
            cover: "https://placehold.co/100x100?text=No+Icon",
            title: "Cat Explorer",
            message:
                "Un rincón interactivo para los amantes de los felinos. Galería dinámica con datos curiosos y una interfaz suave diseñada para el relax.",
            page: "https://cat-page-antonypss.vercel.app/",
            date: "18 de Octubre, 2025",
            tag: "HTML/CSS/JS",
        },
    ];

    const previewList = document.getElementById("projects-grid");
    if (!previewList) {
        console.error("Element with id 'projects-grid' not found!");
        return;
    }

    // Use a DocumentFragment for better performance when appending multiple nodes
    const fragment = document.createDocumentFragment();
    previewItems.forEach((item) => {
        // Main Div
        const card = document.createElement("div");
        card.className = "project-card";

        // Image Cover
        const img = document.createElement("img");
        img.src = item.cover;
        img.alt = item.title;
        img.className = "project-image";
        card.appendChild(img);

        // Title and Tag Container
        const titleTagContainer = document.createElement("div");
        titleTagContainer.className = "title-tag-container";

        // Title
        const title = document.createElement("h3");
        title.className = "project-title";
        title.textContent = item.title;
        titleTagContainer.appendChild(title);

        // Tag
        const tag = document.createElement("span");
        tag.className = "project-tag";
        tag.textContent = item.tag || "Undefined";
        titleTagContainer.appendChild(tag);

        // Append the container to the card
        card.appendChild(titleTagContainer);

        // Description
        const description = document.createElement("p");
        description.className = "project-description";
        description.textContent = item.message;
        card.appendChild(description);

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
        dateIcon.className = "ri-calendar-fill";

        const dateSpan = document.createElement("span");
        dateSpan.textContent = item.date;

        dateTag.appendChild(dateIcon);
        dateTag.appendChild(dateSpan);
        footer.appendChild(dateTag);

        // All together
        card.appendChild(footer);
        fragment.appendChild(card);

        return fragment;
    });

    previewList.appendChild(fragment);
});

// Tech
const technologies = [
    { name: "HTML5", level: "Básico", icon: "ri-html5-fill", color: "#E34F26" },
    { name: "CSS3", level: "Básico", icon: "ri-css3-fill", color: "#1572B6" },
    {
        name: "JavaScript",
        level: "Principiante",
        icon: "ri-javascript-fill",
        color: "#F7DF1E",
    },
    {
        name: "NodeJS",
        level: "Principiante",
        icon: "ri-nodejs-fill",
        color: "#8CC84B",
    },
];

function renderTechList() {
    const container = document.getElementById("tech-list");
    if (!container) return;

    const fragment = document.createDocumentFragment();

    technologies.forEach((tech) => {
        const techCard = document.createElement("div");
        techCard.className = "tech-card";

        // 1. Icono de la tecnología
        const icon = document.createElement("i");
        icon.className = `${tech.icon} tech-icon`;
        icon.style.color = tech.color;

        // 2. Contenedor de información (Nombre + Nivel)
        const infoDiv = document.createElement("div");
        infoDiv.className = "tech-info";

        const nameSpan = document.createElement("span");
        nameSpan.className = "tech-name";
        nameSpan.textContent = tech.name;

        const levelSpan = document.createElement("span");
        levelSpan.className = "tech-level";
        levelSpan.textContent = tech.level;

        // Armado de la estructura
        infoDiv.appendChild(nameSpan);
        infoDiv.appendChild(levelSpan);

        techCard.appendChild(icon);
        techCard.appendChild(infoDiv);

        fragment.appendChild(techCard);
    });

    container.innerHTML = "";
    container.appendChild(fragment);
}

document.addEventListener("DOMContentLoaded", renderTechList);
