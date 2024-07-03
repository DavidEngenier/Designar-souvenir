// Vendor Imports
import 'bootstrap';
console.log('Bootstrap loaded');

// Components
import './components/aos';

import './components/cart-dropdown';

import './components/checkout';

import './components/medium-zoom';
;
import './components/navbar';

import './components/nouislider';
;
import './components/product';

import './components/scroll-to';

import './components/search';

import './components/simplebar';

import './components/swiper';


// theme misc js
import './misc';

document.addEventListener('DOMContentLoaded', () => {
    console.log('theme.js: DOMContentLoaded');
  
    const navbarElement = document.querySelector('.navbar');
    console.log('theme.js: Navbar element', navbarElement);
  
    const dropdownCart = document.querySelector('.dropdown-cart');
    console.log('theme.js: Dropdown Cart element', dropdownCart); });