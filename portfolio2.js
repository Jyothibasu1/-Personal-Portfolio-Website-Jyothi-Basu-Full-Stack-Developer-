let menu =document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onClick = () =>{
    menu.classList.toggle('fa-times');
    menu.classList.toggle('active');
}
window.onscroll = () =>{
    menu.classList.remove('fa-times');
    menu.classList.remove('active');
}