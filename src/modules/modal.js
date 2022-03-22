export const modal = () => {
    const call = document.getElementById('call');
    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const modalClose = document.querySelector('.header-modal__close');

    const hide = () => {
        headerModal.style.display = "none";
        overlay.style.display = "none";
    }

    call.addEventListener('click', e => {
            e.preventDefault();

            headerModal.style.display = "block";
            overlay.style.display = "block";
        })


    modalClose.addEventListener('click', () => hide());

    overlay.addEventListener('click', () => hide());




}

