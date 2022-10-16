//Login
import {USER,PASS} from './data-user.js';

const loginDashboard = document.querySelector('.bg-log');
const formIn = document.querySelector('.log__form')

formIn.addEventListener('submit', evt => {
    evt.preventDefault();
    const userIn = document.querySelector('#user').value;
    const passIn = document.querySelector('#pass').value;
    (userIn === USER && passIn === PASS) 
        ? loginDashboard.style.display = 'none'
        : console.log('datos incorrectos');
})

const close = document.querySelector('#close');
close.addEventListener('click', ()=> {
    loginDashboard.style.display = 'block';
});