document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon');
    const nav = document.querySelector('header nav');
  
    menuIcon.addEventListener('click', function () {
      nav.classList.toggle('active');
    });
  });
  const btnSubmit = document.getElementById('submit');
  
  btnSubmit.addEventListener('click',(e)=>{ 
    e.preventDefault;
    alert('Message envoyer !')
  })
const compteur = document.querySelector('h2');
const main = document.querySelector('main')
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
    },9000)
};

setInterval(prodBulles, 100);


const champs = document.querySelectorAll('input, textarea');

const sonClavier = new Audio('/audios/typing.mp3');

champs.forEach((champ) => {
    champ.addEventListener('input', () => {
      sonClavier.currentTime = 0;
      sonClavier.volume = .1 
      sonClavier.play();
    }); 
});