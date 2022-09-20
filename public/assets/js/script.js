// animasi navbar scroll
window.onscroll = function(){
     const header = document.querySelector('header');
     const nav = header.offsetTop;

     if(window.pageYOffset > nav){
          header.classList.add('navbar-fixed');
     }else{
          header.classList.remove('navbar-fixed');
     }
}


// animasi menu hamburger pada navbar

const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu')
menu.addEventListener('click',function(){
     menu.classList.toggle('menu-active');
     navMenu.classList.toggle('hidden');
});
