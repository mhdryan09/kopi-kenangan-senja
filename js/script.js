// Toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

// Klik di luar sidebar untuk menghilangkan nav
const hamburgerMenu = document.querySelector('#hamburger-menu');
document.addEventListener('click', function (e) {
  // jika klik di luar hamburger menu dan diluar navbar
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    // hilangkan class active
    navbarNav.classList.remove('active');
  }
});