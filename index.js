const iconMenu = document.querySelector('#iconMenu');
const menu = document.querySelector('#menu');


iconMenu.addEventListener("click", (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');

})