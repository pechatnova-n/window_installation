export const servicesModal = () => {
    const servicesModal = document.querySelector('.services-modal');
    const overlay = document.querySelector('.overlay');
    const servicesModalClose = document.querySelector('.services-modal__close');

    const servicesSlider = document.querySelector('.services-slider');
    let modalCall;

    const hide = () => {
        servicesModal.style.display = "none";
        overlay.style.display = "none";
    }


    servicesSlider.addEventListener('click', (e) => {
        e.preventDefault();
        modalCall = document.querySelectorAll('.modalCall');
        modalCall.forEach(item => {

       item.addEventListener('click', (e) => {
           e.preventDefault();
           servicesModal.style.display = 'block';
           overlay.style.display = 'block';
       })
   })

    })

    servicesModalClose.addEventListener('click', () => hide());

    overlay.addEventListener('click', () => hide());

}