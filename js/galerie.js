const btnClose = document.getElementsByClassName('close-btn') 

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
const compteur = document.querySelector('h2');
const main = document.getElementById('divBulle')
let counter=0
const prodBulles = () => {
    const bulle = document.createElement("span");
    bulle.classList.add("bulle");
    main.appendChild(bulle);

    const size = Math.random() *  50 + "px";
    bulle.style.height = size;
    bulle.style.width = size;

    bulle.style.top = Math.random() * 100 + 50 + "%";
    bulle.style.left = Math.random() * 50 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    bulle.style.setProperty("--left", Math.random() * 200 * plusMinus + "%");
    
    
    setTimeout(() => {
        bulle.remove()
    },9000)
};

setInterval(prodBulles, 100);
