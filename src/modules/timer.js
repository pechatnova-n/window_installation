'use strict';

export const timer = (deadline) => {
    const timerDays = document.querySelectorAll('.count_1 span');
    const timerHours = document.querySelectorAll('.count_2 span');
    const timerMinutes = document.querySelectorAll('.count_3 span');
    const timersSeconds = document.querySelectorAll('.count_4 span');


    const getTime = () => {
        let dateStop = new Date(deadline)
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        let days = Math.floor(timeRemaining / 60 /60 / 24);
        let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, days, hours, minutes, seconds }
    }

    const updateTime = () => {
        let time = getTime();

        if(time.timeRemaining <= 0) {
            timerDays.forEach(day => day.textContent = '00');
            timerHours.forEach(hour => hour.textContent = '00');
            timerMinutes.forEach(minute => minute.textContent = '00');
            timersSeconds.forEach(second => second.textContent = '00');
        } else {
            timerDays.forEach(day => day.textContent = addZerro(time.days));
            timerHours.forEach(hour => hour.textContent = addZerro(time.hours));
            timerMinutes.forEach(minute => minute.textContent = addZerro(time.minutes));
            timersSeconds.forEach(second => second.textContent = addZerro(time.seconds));

            /*timerDays.textContent = addZerro(time.days);
            timerHours.textContent = addZerro(time.hours);
            timerMinutes.textContent = addZerro(time.minutes);
            timersSeconds.textContent = addZerro(time.seconds);*/
        }

        setInterval(function () {
            if(time.timeRemaining > 0) {
                updateTime();
            }
        }, 1000);

    }

    const addZerro = (num) => (num < 10)  ? '0' + num : num;
    updateTime();
}