const header = document.querySelector("header");

window.addEventListener ("scroll", function(){
    header.classList.toggle ("sticky", this.window.scrollY > 0);
})

let menuIcon = document.getElementById('menu-icon');
let navmenu = document.querySelector('.navmenu');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navmenu.classList.toggle('open');
});