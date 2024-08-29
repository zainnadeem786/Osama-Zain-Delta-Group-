const netflix_open_btn = document.querySelector('.cn-open-btn');
const netflix_close_btn = document.querySelector('.cn-close-btn');
const netflix_nav = document.querySelectorAll('.cn-nav');
netflix_open_btn.addEventListener('click', () => {
netflix_nav.forEach(nav_el => { nav_el.classList.add('visible') });
});
netflix_close_btn.addEventListener('click', () => {
netflix_nav.forEach(nav_el => { nav_el.classList.remove('visible') });
});
// GET IN TOUCH COMPONENT
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');
floating_btn.addEventListener('click', () => {
social_panel_container.classList.toggle('visible')
});
close_btn.addEventListener('click', () => {
social_panel_container.classList.remove('visible')
});