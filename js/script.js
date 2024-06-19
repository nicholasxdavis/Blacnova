document.getElementById('theme-toggle').addEventListener('click', function() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    if (currentTheme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        this.textContent = '🌗';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        this.textContent = '🌕';
    }
    updateLogo();
});

// Set the initial state based on the saved theme preference
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggleButton = document.getElementById('theme-toggle');
    if (savedTheme) {
        document.documentElement.setAttribute('data-theme', savedTheme);
        themeToggleButton.textContent = savedTheme === 'dark' ? '🌕' : '🌗';
    } else {
        // Set default theme to light if no preference is saved
        document.documentElement.setAttribute('data-theme', 'light');
        themeToggleButton.textContent = '🌗';
    }
    updateLogo();
});

function updateLogo() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const logoImg = document.getElementById('logo-img');
    const infoImg = document.getElementById('info-img'); // Ensure this matches the id in the HTML
    logoImg.src = currentTheme === 'dark' ? 'img/white.png' : 'img/black.png';
    infoImg.src = currentTheme === 'dark' ? 'img/bcard/darkinfo.svg' : 'img/bcard/lightinfo.svg';
}