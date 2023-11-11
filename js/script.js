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

// Toggle class active untuk shopping cart
const shoppingCart = document.querySelector('.shopping-cart');
document.querySelector('#shopping-cart-button').onclick = (e) => {
  shoppingCart.classList.toggle('active');
  e.preventDefault();
}

// Klik di luar elemen
const hamburgerMenu = document.querySelector('#hamburger-menu');
const searchButton = document.querySelector('#search-button');
const shoppingCartButton = document.querySelector('#shopping-cart-button');

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

  // jika klik di luar shopping cart atau search form
  if (!shoppingCartButton.contains(e.target) && !shoppingCart.contains(e.target)) {
    // hilangkan class active
    shoppingCart.classList.remove('active');
  }
});


// Modal Box
const itemDetailModal = document.querySelector('#item-detail-modal');
const itemDetailButtons = document.querySelectorAll('.item-detail-button');

itemDetailButtons.forEach((btn) => {
  // ketika item detail button di klik
  btn.onclick = (e) => {
    // ambil modal lalu ubah display jadi flex
    itemDetailModal.style.display = 'flex';
    e.preventDefault();
  }
})


// klik tombol close modal
document.querySelector('.modal .close-icon').onclick = (e) => {
  // ambil modal lalu ubah display jadi none
  itemDetailModal.style.display = 'none';
  e.preventDefault();
}

// klik di luar modal
window.onclick = (e) => {
  // jika yang ditarget adalah modal
  if (e.target === itemDetailModal) {
    // hilangkan display
    itemDetailModal.style.display = 'none';
  }
}