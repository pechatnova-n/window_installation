'use strict';

export const calculator = () => {
    const calcBlock = document.getElementById('calc');
    const type = document.getElementById('calc-type');
    const typeMaterial = document.getElementById('calc-type-material');
    const area = document.getElementById('calc-input');
    const calcTotal = document.getElementById('calc-total');



    const calculate = () => {
        const typeValue = +type.options[type.selectedIndex].value;
        const typeMaterialValue = +typeMaterial.options[typeMaterial.selectedIndex].value;
        let areaValue = area.value;
        let calcTotalValue;

        type.setAttribute('required', true);
        typeMaterial.setAttribute('required', true);
        area.value = area.value.replace(/[^0-9]+/, "");

       if (type.value && typeMaterial.value ) {
           calcTotalValue = Math.floor(areaValue * typeMaterialValue * typeValue );
       } else {
           calcTotalValue = 0;
       }
        calcTotal.value = calcTotalValue;
    }

    calcBlock.addEventListener('input', (e) => {
        if(e.target === type || e.target === typeMaterial || e.target === area) {

            calculate()
        }
    })
}