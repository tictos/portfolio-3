let navMenu = document.querySelector('#navlinks');

let Menu = document.querySelector('#menu');


Menu.onclick = () => {
    if (Menu.classList.contains('bx-menu')) {
        Menu.classList.replace('bx-menu', 'bx-x');
        navMenu.classList.toggle('show-menu');
    } else {
        Menu.classList.replace('bx-x', 'bx-menu');
        navMenu.classList.remove('show-menu');
    }
}