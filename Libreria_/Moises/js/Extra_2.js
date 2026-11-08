let cuenta = 0;

const pantallaContador = document.getElementById('contador');

const btnSumar = document.getElementById('btn-contador');

btnSumar.addEventListener('click', () => {
    cuenta++;
    pantallaContador.textContent = cuenta;
});
