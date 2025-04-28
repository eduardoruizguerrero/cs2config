// Elementos principales
let body = document.querySelector("body");
let copy = document.querySelectorAll(".copy");
let copyAllSection = document.querySelectorAll(".copyAllSection");
let copyAllSectionSpan = document.querySelectorAll(".copyAllSectionSpan");
let copyAllSections = document.getElementById("copyAllSections");
let copyAllSectionsSpan = document.getElementById("copyAllSectionsSpan");
let moon = document.getElementById("moon");
let sun = document.getElementById("sun");

// Hora actual
let hora = new Date().getHours();

// Textos de botones
copyAllSectionSpan.forEach(span => span.textContent += "copiar todo su contenido")
copyAllSectionsSpan.textContent = "prefiero copiar todos los parámetros";

// Copia individual
copy.forEach(button => {
    button.addEventListener("click", () => {
        let texto = button.querySelector("span").textContent;
        texto += " ";
        navigator.clipboard.writeText(texto)
    });
});

//Copia de un artículo completo
copyAllSection.forEach(button => {
    button.addEventListener("click", () => {
        let article = button.closest("article");
        let buttons = article.querySelectorAll(".copy span");
        let texto = "";
        buttons.forEach(span => {
            texto += span.textContent + " ";
        });
        navigator.clipboard.writeText(texto);
    });
});

// Copia de todas las secciones
copyAllSections.addEventListener("click", () => {
    let allSections = document.querySelectorAll("section");
    let texto = "";

    allSections.forEach(section => {
        let spans = section.querySelectorAll(".copy span");
        spans.forEach(span => {
            texto += span.textContent + " ";
        });
    });

    navigator.clipboard.writeText(texto);
});

// Cambio de Modo Oscuro-Claro
function toggleMode(mode) {
    let isDark = mode === "dark";
    body.className = mode;

    copy.forEach(element => {
        element.classList.toggle("backgroundDark", isDark);
        element.classList.toggle("backgroundLight", !isDark);
    });

    copyAllSection.forEach(element => {
        element.classList.toggle("backgroundDark", isDark);
        element.classList.toggle("backgroundLight", !isDark);
    });

    copyAllSections.className = isDark ? "backgroundDark" : "backgroundLight";

    moon.classList.toggle("moonInverted", isDark);
    sun.classList.toggle("sunInverted", isDark);

    moon.style.display = isDark ? "none" : "block";
    sun.style.display = isDark ? "block" : "none";
}

// Tema automático según la hora
toggleMode(hora >= 20 || hora <= 6 ? "dark" : "light");

// Botones de cambio manual
moon.addEventListener("click", () => toggleMode("dark"));
sun.addEventListener("click", () => toggleMode("light"));