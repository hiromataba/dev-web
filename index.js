let menuOpen = document.querySelector('.menu');
let menuClose = document.querySelector('.menu-closed');

const toggleMenu = () => {
  console.log('Open');
  menuOpen.style.display = 'none';
  menuClose.style.display = 'block';
}

const toggleMenuClose = () => {
  console.log('Close');
  menuOpen.style.display = 'block';
  menuClose.style.display = 'none';
}

menuOpen.addEventListener('click', toggleMenu);
menuClose.addEventListener('click', toggleMenuClose);
