const netflix_open_btn = document.querySelector('.cn-open-btn');
const netflix_close_btn = document.querySelector('.cn-close-btn');
const netflix_nav = document.querySelector('.cn-nav');

netflix_open_btn.addEventListener('click', ()=> {
    netflix_nav.forEach (nav_el=> {nav_el.classList.add('visible')});
});