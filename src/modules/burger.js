'use strict';

export const burger = () => {

    if (window.screen.width < 994) {
        const navbarToggle = document.querySelectorAll('.navbar-toggle');
        const burgerMenuLinks = document.querySelectorAll('#menu-main-menu a');
        const navigationFixed = document.querySelector('#navigation-fixed');
        const navbarCollapseFixed = document.querySelector('#navbar-collapse-fixed');

        console.log(navbarToggle)

        const showFixMenu = () => {
            navigationFixed.style.margin = '0';
            navigationFixed.style.display = 'block';
            navbarCollapseFixed.style.display = 'block';
            navbarCollapseFixed.querySelector('.navbar-order').style.display = 'block';
        }

        const hideFixMenu = () => {
            navigationFixed.style.margin = '-60';
            navigationFixed.style.display = 'none';
            navbarCollapseFixed.style.display = 'none';
            navbarCollapseFixed.querySelector('.navbar-order').style.display = 'none';
        }

        navbarToggle[1].addEventListener('click', () => showFixMenu());

        navbarToggle[0].addEventListener('click', () => hideFixMenu());

        burgerMenuLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                hideFixMenu();
            })
        })
    }


}