const hours = document.getElementById('horas');
const minutes = document.getElementById('minutos');
const seconds = document.getElementById('segundos');

const rel = document.querySelector('#relogio');

const relogio = setInterval(function time() {

    let date = new Date();

    let hora = date.getHours();
    let minuto = date.getMinutes();
    let segundo = date.getSeconds();

    const horas = hora < 10 ? `0${hora}` : hora;
    const minutos = minuto < 10 ? `0${minuto}` : minuto;
    const segundos = segundo < 10 ? `0${segundo}` : segundo;

    hours.textContent = horas;
    minutes.textContent = minutos;
    seconds.textContent = segundos; 

    // hours.innerText = horas;
    // minutes.innerText = minutos;
    // seconds.innerText = segundos;

});