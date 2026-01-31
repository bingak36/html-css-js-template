const menubtn = document.querySelector(".menu-btn");
const menu = document.querySelector("header ul");

menubtn.addEventListener('click', ()=> {
    menu.classList.toggle('on');
})