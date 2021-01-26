let navTog = document.querySelector('#nav-toggle');
let navList = document.getElementById('nav-links');
const overlay = document.getElementById('overlay');

navTog.addEventListener('click', e =>{
    
    navTog.classList.toggle('active');
    navList.classList.toggle('active');
    overlay.classList.toggle('overlay-switch');
});