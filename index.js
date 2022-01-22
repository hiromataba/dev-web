let menuOpen = document.querySelector('.menu');
let menuClose = document.querySelector('.menu-closed');

const toggleMenu = () => {
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
}

const toggleMenuClose = () => {
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
}

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenuClose);
