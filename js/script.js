
document.addEventListener('DOMContentLoaded', () => {
    const themeBtn  = document.getElementById('themeBtn');
    const body      = document.body;
    const THEME_KEY = 'av_theme';

    if (localStorage.getItem(THEME_KEY) === 'light') {
        body.classList.add('light-mode');
        themeBtn.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        const isLight = body.classList.contains('light-mode');
        themeBtn.innerHTML = isLight
            ? '<i class="bi bi-sun-fill"></i>'
            : '<i class="bi bi-moon-fill"></i>';
        localStorage.setItem(THEME_KEY, isLight ? 'light' : 'dark');
    });

});
