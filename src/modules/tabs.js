'use strict';

export const tabs = () => {
    const tabContent = document.querySelectorAll('.tab');
    const tabPanel = document.querySelector('.tabs-link');
    const tabs = document.querySelectorAll('.tab-link');

    tabPanel.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.closest('.tab-link')) {
            const tabBtn = e.target.closest('.tab-link')

            tabs.forEach((tab, index) => {
                tab.classList.remove('active');
                tabContent[index].classList.remove('active');

                if (tab === tabBtn) {
                    tab.classList.add('active');
                    tabContent[index].classList.add('active');
                }
            })
        }
    })



}