'use strict';

export const validation = () => {
    const inputsName = document.querySelectorAll('input[name = fio]');
    const inputsPhone = document.querySelectorAll('input[name = phone]');

    inputsName.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^\sа-яА-Яa-zA-Z]+/i, "");
        })
    })

    inputsPhone.forEach(item => {
        item.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^+0-9]+/, "");
        })
    })
}