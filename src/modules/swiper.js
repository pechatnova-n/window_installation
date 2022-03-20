'use strict';
import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper';


export const swiper = () => {
    const swiper = new Swiper('.benefits-inner', {
        slidesPerView: 1,
        //slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        modules: [Autoplay, Navigation],
        /*autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },*/
        navigation: {
            nextEl: '.benefits__arrow--right',
            prevEl: '.benefits__arrow--left',
        },
        /*breakpoints: {
            576: {
                spaceBetween: 10,
                slidesPerView: 3,
                slidesPerGroup: 3,
            }
        }*/
    });

    const swiper2 = new Swiper('.services-slider', {
        slidesPerView: 1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        modules: [Autoplay, Navigation],
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.services__arrow--right',
            prevEl: '.services__arrow--left',
        },
        breakpoints: {
            576: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            }
        }
    });
}