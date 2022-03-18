export const servicesModal = () => {
    const modalCall = document.querySelectorAll('.modalCall');
    const servicesModal = document.querySelector('.services-modal');
    const overlay = document.querySelector('.overlay');
    const servicesModalClose = document.querySelector('.services-modal__close');



    modalCall.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();

            if(e.target.closest('.row')) {
                servicesModal.style.display = 'block';
                overlay.style.display = 'block';
            }
        })
    })

    servicesModalClose.addEventListener('click', () => {
        servicesModal.style.display = 'none';
        overlay.style.display = 'none';
    })

    overlay.addEventListener('click', () => {
        servicesModal.style.display = "none";
        overlay.style.display = "none";
    })

}