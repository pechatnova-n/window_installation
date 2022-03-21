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
        if (window.pageYOffset > 0) {
            window.scrollBy(0, -50);
            setTimeout(moveToTop, 0);
        }
    }

    window.addEventListener('scroll', trackScroll);
    scrollBtn.addEventListener('click', moveToTop);
}