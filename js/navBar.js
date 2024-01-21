const nav = document.querySelector('nav');
const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.nav-menu');
const links = document.querySelectorAll('.nav-link');

let size = 0;

window.addEventListener('scroll', () => {
    nav.classList.toggle('scroll', window.scrollY > size);
    menu.classList.toggle('scroll', window.scrollY > size);

});

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menu.classList.toggle('active');
})

Array.from(links).forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        menu.classList.toggle('active');
    })
})
