'use strict';

export const form = ({formId}) => {
   const form = document.getElementById(formId);
   const responseSendData = document.getElementById('responseMessage');
   const overlay = document.querySelector('.overlay');

   const text = document.querySelector('#responseMessage .box-modal_title>h2');
   const close = document.querySelector('#responseMessage .box-modal_body>a.fancyClose');


   const validate = (list) => {
      let success;

      list.forEach(item => {
         if (item.name === "fio") {
            if (item.value.length < 3) {
               success = false;
            }
         } else if (item.name === "phone") {
            if (item.value.length > 16 || (item.value.length < 1)) {
               console.log(`phone ${item.value.length}`)
               success = false;
            }
         } else {
            success = true;
         }
      })

      console.log(success)
      return success;
   }

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      }).then(response => response.json())
          .then(data => {
             console.log(data);
          })
          .catch(error => console.log(error))
   }

   const submitForm = () => {
      const formElements = form.querySelectorAll('input');
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
         formBody[key] = val;
      })

      if (validate(formElements)) {
         sendData(formBody)
             .then(data => {
                responseSendData.style.display = "block";
                text.textContent = "Форма успешно отправлена";
                overlay.style.display = "block";

                formElements.forEach(input => {
                   input.value = "";
                })

                close.addEventListener('click', (e) => {
                   e.preventDefault();
                   responseSendData.style.display = "none";
                   overlay.style.display = "none";
                })

                overlay.addEventListener('click', (e) => {
                   e.preventDefault();
                   responseSendData.style.display = "none";
                   overlay.style.display = "none";
                })

             })
             .catch(error => {
                console.log('error')
                /*responseSendData.style.display = "block";
                text.textContent = "Ошибка отправки";
                overlay.style.display = "block";

                close.addEventListener('click', (e) => {
                   e.preventDefault();
                   responseSendData.style.display = "none";
                   overlay.style.display = "none";
                })*/
             })
      } else {
         formElements.forEach(input => {
            input.value = '';
         })
         alert('Данные не валидны!');
      }


   }

   try {
      if (!form) {
         throw new Error("Верните форму на страницу");
      }

      form.addEventListener('submit', (e) => {
         e.preventDefault();

         submitForm();

      })
   } catch (error) {
      console.log(error.message);
   }


}