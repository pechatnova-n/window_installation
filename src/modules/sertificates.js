'use strict';

export const sertificates = () => {
    const sertificateDocument = document.querySelector('.text-center');
    const overlay = document.querySelector('.overlay');
    const clientHeight = document.documentElement.clientHeight;

    sertificateDocument.addEventListener('click', (e) => {
        e.preventDefault();

        let sert =  e.target.closest('.sertificate-document');

        let srcArr = sert.children[0].src.split("/");
        let str1 = srcArr.slice(0, -1).join("/");
        let str2 = srcArr.slice(-1).toString().trim();
        let url = `${str1}/original/${str2}`;

        let el = document.createElement('div');
        el.className = "bigSert";
        el.innerHTML = `
            <a href=${sert.href} class="bigLink">
                <img src=${url} class="bigImage" alt="">
            </a>
            <span class="sert-close">X</span>
            `

        let height = clientHeight - 40;
        let width = (clientHeight / 3) * 2;
        el.style.height = `${height}px`;
        el.style.width = `${width}px`;

        overlay.style.display = 'block';
        document.body.prepend(el);

        document.querySelector('.sert-close').addEventListener('click', (e) => {
            e.preventDefault();

            el.remove();
            overlay.style.display = 'none';
        })

        overlay.addEventListener('click', (e) => {
            e.preventDefault();

            el.remove();
            overlay.style.display = 'none';
        })

    })










}