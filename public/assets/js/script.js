// animasi navbar scroll
window.onscroll = function(){
     const header = document.querySelector('header');
     const nav = header.offsetTop;
     const toTop =document.querySelector('#to-top');

     if(window.pageYOffset > nav){
          header.classList.add('navbar-fixed');
          toTop.classList.remove('hidden');
          toTop.classList.add('flex');
     }else{
          header.classList.remove('navbar-fixed');
          toTop.classList.remove('flex');
          toTop.classList.add('hidden');
     }
}
// animasi menu hamburger pada navbar
const menu = document.querySelector('#menu');
const navMenu = document.querySelector('#nav-menu')
menu.addEventListener('click',function(){
     menu.classList.toggle('menu-active');
     navMenu.classList.toggle('hidden');
});

// tutup navbar hamburger
window.addEventListener('click',function(e){
     if(e.target != menu && e.target != navMenu ){
          menu.classList.remove('menu-active')
          navMenu.classList.add('hidden')
     }
})

// mode dark mode
const darkToggle = document.querySelector('#dark-toggle');
const html = document.querySelector('html');

darkToggle.addEventListener('click',function(){
     // darkToggle.checked ? html.classList.add('dark'): html.classList.remove('dark')
     if(darkToggle.checked){
          html.classList.add('dark');
          localStorage.theme ='dark';
     }else{
          html.classList.remove('dark');
          localStorage.theme ='light';
     }
});
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
     darkToggle.checked = true;
} else {
     darkToggle.checked = false;
   }