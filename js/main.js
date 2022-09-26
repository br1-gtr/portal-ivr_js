const nav = document.querySelector('.nav');
const btnNav = document.querySelector('#btn-nav');
console.log(btnNav);

btnNav.addEventListener('click', () => {
    nav.classList.toggle('nav-off');
});