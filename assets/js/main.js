$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });
});

let navTog = document.querySelectorAll('#nav-toggle');
let navList = document.getElementById('nav-links');

navTog.forEach(popup => popup.addEventListener('click', (e) =>{
    

    popup.classList.toggle('active');
    navList.classList.toggle('active');

}));