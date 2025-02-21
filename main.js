
// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    
    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 0) {
            navbar.style.backgroundColor = '#001233';
        } else {
            navbar.style.backgroundColor = 'transparent';
        }
    });

    // Mobile menu toggle
    mobileMenuButton.addEventListener('click', function() {
        navbar.classList.toggle('mobile-menu-active');
    });

    // Initialize video
    const video = document.querySelector('.hero-video');
    if (video) {
        video.play().catch(function(error) {
            console.log("Error playing video:", error);
        });
    }
});
