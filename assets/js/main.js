$(document).ready(function() {
    $('.carousel').carousel({
        interval: 3000
    });
});

let navTog = document.querySelectorAll('#nav-toggle');

navTog.forEach(popup => popup.addEventListener('click', (e) =>{

    popup.classList.toggle('active');

}));