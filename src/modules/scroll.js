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
        document.querySelector("body").scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }

    window.addEventListener('scroll', trackScroll);
    scrollBtn.addEventListener('click', moveToTop);
}

