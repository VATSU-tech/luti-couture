const btnClose = document.getElementsByClassName("close-btn");

function showDetail(src, title, desc) {
    document.getElementById("detailImg").src = src;
    document.getElementById("detailTitle").textContent = title;
    document.getElementById("detailDesc").textContent = desc;
    document.getElementById("detailView").style.display = "flex";
    document.getElementById("gallery").style.filter = "blur(15px)";
}

function closeDetail() {
    document.getElementById("detailView").style.display = "none";
    document.getElementById("gallery").style.filter = "none";
}
const compteur = document.querySelector("h2");
const main = document.getElementById("divBulle");
let counter = 0;
const prodBulles = () => {
    //--------------------------------
    if(headerLink.classList.contains("active")) {
        main.style.filter = 'blur(10px)'
        document.body.style.overflow = 'hidden'
    } else {
        main.style.filter = 'none'
        document.body.style.overflow = 'auto'
    }
    //--------------------------------
    const bulle = document.createElement("span");
    bulle.classList.add("bulle");
    main.appendChild(bulle);

    const size = Math.random() * 50 + "px";
    bulle.style.height = size;
    bulle.style.width = size;

    bulle.style.top = Math.random() * 100 + 50 + "%";
    bulle.style.left = Math.random() * 50 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bulle.style.setProperty("--left", Math.random() * 200 * plusMinus + "%");

    setTimeout(() => {
        bulle.remove();
    }, 19000);
};

setInterval(prodBulles, 100);

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
