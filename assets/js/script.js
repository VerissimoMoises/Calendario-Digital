const dia = document.getElementById('dia');
const mes = document.getElementById('mes');
const ano = document.getElementById('ano');
const hora = document.getElementById('horas');
const minutos = document.getElementById('minutos');
const segundos = document.getElementById('segundos');


function zero (tempo) {
    if (tempo < 10) {
        return '0' + tempo
    } else {
        return tempo
    }
}

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let dia = dateToday.getDate();
    let mes = dateToday.getMonth() + 1;
    let ano = dateToday.getFullYear();
    let hora  = dateToday.getHours();
    let min  = dateToday.getMinutes();
    let seg  = dateToday.getSeconds();

    if (hora >= 5 && hora < 8) {
        document.body.style.background = 'linear-gradient(0deg, #e4731c, #df3f22, #415b96)';
    } else if (hora >= 8 && hora <= 16) {
        document.body.style.background = 'linear-gradient(50deg, #3498db, #819dda, #e6b458)';
    } else if (hora > 16 && hora <= 19) {
        document.body.style.background = 'linear-gradient(180deg, #e4731c, #df3f22, #415b96)';
    } else {
        document.body.style.background = 'linear-gradient(#5d4366, #445b8d, #160821)';
    }


    document.getElementById('dia').innerHTML = zero(dia);
    document.getElementById('mes').innerHTML = zero(mes);
    document.getElementById('ano').innerHTML = ano;
    document.getElementById('horas').innerHTML = zero(hora);
    document.getElementById('minutos').innerHTML = zero(min);
    document.getElementById('segundos').innerHTML = zero(seg);
})