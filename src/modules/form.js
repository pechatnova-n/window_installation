'use strict';

export const form = ({formId, someElement = []}) => {
   const form = document.getElementById(formId);
   const responseSendData = document.getElementById('responseMessage');
   const overlay = document.querySelector('.overlay');

   const text = document.querySelector('#responseMessage .box-modal_title>h2');
   const close = document.querySelector('#responseMessage .box-modal_body>a.fancyClose');


   const validate = (list) => {
      let success = true;

      list.forEach(item => {

         if (item.name === "fio") {
            item.require = true;
            if (item.value.length < 3) {
               success = false;
            }
         } else if (item.name === "phone") {
            item.require = true;
            if ((item.value.length < 1) || item.value.length > 16) {
               success = false;
            }
         } else {
            success = true;
         }
      })

      return success;
   }

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      }).then(response => {
         if(response.status !== 404) {
            return response.json();
         } else {
            console.log("Ошибка отправки");
         }
      }).catch((error) => {
         console.log(error);
      })
   }

   const submitForm = () => {
      const formElements = form.querySelectorAll('input[type=text]');
      const formData = new FormData(form);
      const formBody = {};

      formData.forEach((val, key) => {
         formBody[key] = val;
      })


      someElement.forEach(elem => {
         const element = document.getElementById(elem.id);
         formBody[elem.id] = element.value;
      })


      if (validate(formElements)) {
         sendData(formBody)
             .then(data => {
                responseSendData.style.display = "block";
                if(data) {
                   text.textContent = "Форма успешно отправлена";
                } else {
                   text.textContent = "Произошла ошибка, данные формы не отправлены";
                }
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
                console.log(error)
             })
      } else {
         formElements.forEach(input => {
            input.value = '';
         })
         alert('Имя или телефон введены не верно!');
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