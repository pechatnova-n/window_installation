'use strict';

export const scroll = () => {
    const scrollBtn = document.querySelector('.smooth-scroll');

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let clientHeight = document.documentElement.clientHeight;

        if (scrolled > clientHeight) {
            scrollBtn.style.display = 'block';
        }
        if (scrolled < clientHeight) {
            scrollBtn.style.display = 'none';
        }
    }

    function moveToTop() {
        let interval;
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -50);
            interval = setTimeout(moveToTop, 0.01);
        } else {
            clearTimeout(interval);
        }
    }

    window.addEventListener('scroll', trackScroll);
    scrollBtn.addEventListener('click', moveToTop);
}

