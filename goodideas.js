 var boton = document.querySelector('.btn-hamburguesa');
 var menuNav = document.querySelector('.menu_nav');

 boton.addEventListener('click', () => {
 	menuNav.classList.toggle('visible_menu');
 });