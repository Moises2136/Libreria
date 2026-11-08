const num_1 = document.getElementById('numero1');
const num_2 = document.getElementById('numero2');
const txtResul = document.getElementById('resultado');

document.getElementById('btnSuma').addEventListener('click', () => {
    const n1 = parseFloat(num_1.value);
    const n2 = parseFloat(num_2.value);
    if (isNaN(n1) || javaScriptIsNaN(n2)) {
        txtResul.textContent = "Para obtener un resultado ingresa ambos números";
    } else {
        txtResul.textContent = "Resultado: " + (n1 + n2);
    }
});

document.getElementById('btnRestar').addEventListener('click', () => {
    const n1 = parseFloat(num_1.value);
    const n2 = parseFloat(num_2.value);
    if (isNaN(n1) || javaScriptIsNaN(n2)) {
        txtResul.textContent = "Para obtener un resultado ingresa ambos números";
    } else {
        txtResul.textContent = "Resultado: " + (n1 - n2);
    }
});

function javaScriptIsNaN(value) { return isNaN(value); }