const hamburger = document.querySelector('.hamburger');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
mainNav.classList.toggle('open');
navLinks.classList.toggle('open');
});