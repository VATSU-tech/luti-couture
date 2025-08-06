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
    
    bulle.addEventListener('mouseover', () => { 
        bulle.addEventListener('click', () => {
            counter++
            compteur.textContent = counter;
            bulle.remove();
        })
    })
    
    setTimeout(() => {
        bulle.remove()
    },19000)
};

setInterval(prodBulles, 100);
