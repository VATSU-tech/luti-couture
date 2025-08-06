const carousel = document.getElementById('carousel'); 
const next = document.getElementById('next');
const prev = document.getElementById('prev'); 

next.addEventListener('click', () => {
  carousel.scrollBy({ left: 285, behavior: 'smooth' });
});

prev.addEventListener('click', () => {
  carousel.scrollBy({ left: -285, behavior: 'smooth' });
}); 
const cardWidth = 285;

function scrollNext() {
  const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;

  if (Math.ceil(carousel.scrollLeft + cardWidth) >= maxScrollLeft) {
    // Revenir au début si on atteint la fin
    carousel.scrollTo({ left: 0, behavior: 'smooth' });
  } else {
    // Passer à la carte suivante
    carousel.scrollBy({ left: cardWidth, behavior: 'smooth' });
  }
}


// Démarrage de l'autoscroll toutes les 3 secondes
setInterval(scrollNext, 3000);

const menuToggle = document.getElementById('menu-toggle');
  const headerLink = document.getElementById('header-link');

  menuToggle.addEventListener('click', () => {
    headerLink.classList.toggle('active');
  });
  const compteur = document.querySelector('h2');
const main = document.querySelector('main');
console.log(main);

let counter=0
const prodBulles = () => {
    const bulle = document.createElement("img");
    bulle.src = "/images/LUTTI Fashion logo.png"
    bulle.classList.add("bulle");
    main.appendChild(bulle);

    const size = Math.random() *  100 + 50 + "px";
    bulle.style.height = size;
    bulle.style.width = size;

    bulle.style.transform = "rotate("+ Math.random() * 360 + "deg)" 
    bulle.style.background = "none"

    bulle.style.top = Math.random() * 100 + 50 + "%";
    bulle.style.left = Math.random() * 50 + "%";

    const plusMinus = Math.random() > 0.5 ? 1 : -1;
    // const plusMinus = main.clientWidth;
    // bulle.style.filter = "blur(20px)"
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
    },13500)
};

setInterval(prodBulles, 500); 
//------------------------------------------------------------------

 const mode = document.getElementById('mode')
 var etatMode = true;
 
 mode.addEventListener('click', ()=> {
   etatMode = !etatMode; 
   var backgroundColor = etatMode ? "white" : "gray";
   localStorage.setItem("theme" , backgroundColor);
   var themeColor = localStorage.getItem("theme");
   console.log(themeColor);
   
  document.documentElement.style.setProperty("--background",themeColor);
 })