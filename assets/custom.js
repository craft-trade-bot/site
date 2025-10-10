// Custom JavaScript - Bootstrap JS Replacement

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const navbarToggler = document.querySelector('.navbar-toggler');
  const navbarNav = document.querySelector('.navbar-nav');
  
  if (navbarToggler && navbarNav) {
    navbarToggler.addEventListener('click', function() {
      navbarNav.classList.toggle('show');
    });
  }
});

// Navbar scroll effect (from original scripts.js)
(function() {
  'use strict';
  
  var MQL = 992;
  
  if (window.innerWidth > MQL) {
    var headerHeight = document.getElementById('mainNav').offsetHeight;
    var previousTop = 0;
    
    window.addEventListener('scroll', function() {
      var currentTop = window.pageYOffset;
      
      // Check if user is scrolling up
      if (currentTop < previousTop) {
        // If scrolling up...
        if (currentTop > 0 && document.getElementById('mainNav').classList.contains('is-fixed')) {
          document.getElementById('mainNav').classList.add('is-visible');
        } else {
          document.getElementById('mainNav').classList.remove('is-visible', 'is-fixed');
        }
      } else if (currentTop > previousTop) {
        // If scrolling down...
        document.getElementById('mainNav').classList.remove('is-visible');
        if (currentTop > headerHeight && !document.getElementById('mainNav').classList.contains('is-fixed')) {
          document.getElementById('mainNav').classList.add('is-fixed');
        }
      }
      previousTop = currentTop;
    });
  }
})();
