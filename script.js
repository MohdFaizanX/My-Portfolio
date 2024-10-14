window.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio Loaded Successfully');
    
    // Add smooth scrolling animation to the nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});
