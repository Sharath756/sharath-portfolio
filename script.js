document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const navElements = document.getElementById('nav-elements');

    // Toggle menu visibility when menu button is clicked
    menuBtn.addEventListener('click', () => {
        navElements.style.display = navElements.style.display === 'none' ? 'flex' : 'none';
    });

    // Close menu when a navigation link is clicked
    const navLinks = navElements.getElementsByTagName('a');
    Array.from(navLinks).forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                navElements.style.display = 'none';
            }
        });
    });

    // Initialize menu state based on screen width
    function updateMenuVisibility() {
        if (window.innerWidth > 768) {
            navElements.style.display = 'flex';
        } else {
            navElements.style.display = 'none';
        }
    }

    // Update menu visibility on window resize
    window.addEventListener('resize', updateMenuVisibility);
    
    // Set initial menu state
    updateMenuVisibility();
});