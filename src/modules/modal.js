export const modal = () => {
    const call = document.getElementById('call');
    const headerModal = document.querySelector('.header-modal');
    const overlay = document.querySelector('.overlay');
    const modalClose = document.querySelector('.header-modal__close');


    call.addEventListener('click', e => {
            e.preventDefault();

            headerModal.style.display = "block";
            overlay.style.display = "block";
        })


    modalClose.addEventListener('click', () => {
        headerModal.style.display = "none";
        overlay.style.display = "none";
    })

    overlay.addEventListener('click', () => {
        headerModal.style.display = "none";
        overlay.style.display = "none";
    })




}

