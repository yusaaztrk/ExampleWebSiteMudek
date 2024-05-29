document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.toggle-button');
    const navLinks = document.querySelector('.nav_links');

    button.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    // Ana menü bağlantılarına tıklanınca mobil menüyü kapat
    const menuLinks = document.querySelectorAll('.nav_links li a');
    menuLinks.forEach(link => {
        link.addEventListener('click', function() {
            navLinks.classList.remove('active');
        });
    });
});