// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector('.navbar-nav');
// ketika hamburger menu diklik
document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
}

// Toggle class active untuk search form
const searchForm = document.querySelector('.search-form');
const searchBox = document.querySelector('#search-box');
// ketika search icon di klik
document.querySelector('#search-button').onclick = (e) => {
  searchForm.classList.toggle('active');
  searchBox.focus();
  e.preventDefault();
}

// Klik di luar elemen
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');

document.addEventListener('click', function (e) {
  // jika klik di luar hamburger menu dan diluar navbar
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    // hilangkan class active
    navbarNav.classList.remove('active');
  }
  
  // jika klik di luar search bar atau search form
  if (!searchButton.contains(e.target) && !searchForm.contains(e.target)) {
    // hilangkan class active
    searchForm.classList.remove('active');
  }
});