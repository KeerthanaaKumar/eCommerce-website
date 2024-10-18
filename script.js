const mobileMenu = document.getElementById('mobile-menu'); // Get the mobile menu toggle
const navLinks = document.querySelector('.nav-links'); // Get the nav links

// Toggle the active class on click
mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class for the links
});
