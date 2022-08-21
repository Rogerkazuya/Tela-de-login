const countdown = () => {
    const countDate = new Date("july 16, 2022 1:00:00 ").getTime();
    const now = new Date().getTime();
    const time = countDate - now;



    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const diaFinal = Math.floor(time / day);
    const horas = Math.floor(time % day  / hour);
    const minutos = Math.floor(time % hour / minute);
    const segundos = Math.floor(time % minute / second);

    document.querySelector('#dia').innerHTML = diaFinal
    document.querySelector('#horas').innerHTML = horas
    document.querySelector('#minutos').innerHTML = minutos
    document.querySelector('#segundos').innerHTML = segundos
};


setInterval(countdown, 1000);
