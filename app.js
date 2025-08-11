const carousel = document.getElementById("carousel");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const compteur = document.querySelector("h2");
const main = document.querySelector("main"); 
const headerNav = document.getElementById('headerContactNav');
const videoBackground = document.getElementById('video-background'); 

const cardWidth = 285;

next.addEventListener("click", () => {
    carousel.scrollBy({ left: cardWidth, behavior: "smooth" });
});

prev.addEventListener("click", () => {
    carousel.scrollBy({ left: -cardWidth, behavior: "smooth" });
});

setInterval(()=> carousel.scrollBy({ left: cardWidth, behavior: "smooth" }), 3000)
setInterval(()=> carousel.scrollBy({ left: -cardWidth*8, behavior: "smooth" }), 30000)

const menuToggle = document.getElementById("menu-toggle");
const headerLink = document.getElementById("header-link"); 

menuToggle.addEventListener("click", () => {
    headerLink.classList.toggle("active");
    if(headerLink.classList.contains("active")) {
        headerNav.style.filter = 'blur(10px)'
        document.body.style.overflow = 'hidden'
        videoBackground.style.filter = 'blur(10px)'
    } else {
        headerNav.style.filter = 'none'
        document.body.style.overflow = 'auto'
        videoBackground.style.filter = 'none'
    }
});

let counter = 0;
const prodBulles = () => {
    var bulle = document.createElement("img");
    bulle.src = "/images/LUTTI Fashion logo.png";
    bulle.classList.add("bulle");
    main.appendChild(bulle);

    const size = Math.random() * 100 + 50 + "px";
    bulle.style.height = size;
    bulle.style.width = size;

    bulle.style.transform = "rotate(" + Math.random() * 360 + "deg)";
    bulle.style.background = "none";

    bulle.style.top = Math.random() * 100 + 50 + "%";
    bulle.style.left = Math.random() * 50 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1; 

    bulle.style.setProperty("--left", Math.random() * 200 * plusMinus + "%");

    bulle.addEventListener("mouseover", () => {
        bulle.addEventListener("click", () => {
            counter++;
            compteur.textContent = counter;
            bulle.remove();
        });
    });

    setTimeout(() => {
        bulle.remove();
    }, 19500);
};

setInterval(prodBulles, 500);

//------------------------------------------------------------------
const btnTheme = document.getElementById("theme");

const changerTheme = () => {
    const themeAppliquer = document.documentElement.getAttribute("data-theme");
    const nouveauTheme = themeAppliquer === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("dark-theme", nouveauTheme);
    localStorage.setItem("theme", nouveauTheme);
};

btnTheme.addEventListener("click", changerTheme);

btnTheme.addEventListener("click", () => {
    const themeSauvegarder = localStorage.getItem("theme") || "light";

    if (themeSauvegarder === "dark") {
        document.getElementById("lune").classList.add("themeActive");
        document.getElementById("soleil").classList.remove("themeActive");
    } else {
        document.getElementById("soleil").classList.add("themeActive");
        document.getElementById("lune").classList.remove("themeActive");
    }

    document.documentElement.setAttribute("data-theme", themeSauvegarder);
});

window.addEventListener("DOMContentLoaded", () => {
    const themeSauvegarder = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", themeSauvegarder);

    if (themeSauvegarder === "dark") {
        document.getElementById("lune").classList.add("themeActive");
        document.getElementById("soleil").classList.remove("themeActive");
    } else {
        document.getElementById("soleil").classList.add("themeActive");
        document.getElementById("lune").classList.remove("themeActive");
    }
}); 


