'use strict';

export const burger = () => {

    if (window.screen.width < 994) {
        const navbarToggle = document.querySelectorAll('.navbar-toggle');
        const navigationFixed = document.querySelector('#navigation-fixed');
        const navbarCollapseFixed = document.querySelector('#navbar-collapse-fixed');

            navbarToggle[1].addEventListener('click', () => {
                navigationFixed.style.margin = '0';
                navigationFixed.style.display = 'block';
                navbarCollapseFixed.style.display = 'block';
                navbarCollapseFixed.querySelector('.navbar-order').style.display = 'block';

            })

        navbarToggle[0].addEventListener('click', () => {
            navigationFixed.style.margin = '-60';
            navigationFixed.style.display = 'none';
            navbarCollapseFixed.style.display = 'none';
            navbarCollapseFixed.querySelector('.navbar-order').style.display = 'none';

        })


    }


}