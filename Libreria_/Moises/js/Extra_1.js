const btnModo = document.getElementById('btn-modo');
const Zona_oscura = document.getElementById('M-oscuro');

btnModo.addEventListener('click', () => {
    Zona_oscura.classList.toggle('tema-oscuro');
});
