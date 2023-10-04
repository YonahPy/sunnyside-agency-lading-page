const mobileMenu = document.querySelector('.mobile-menu');

const ul = document.querySelector('nav ul');

mobileMenu.addEventListener('click', () => {
    ul.classList.toggle('active')
})