const contenedorColor = document.getElementById('ColorAleatorio');
const textoColor = document.getElementById('txtColor');
const btnCambiarColor = document.getElementById('btnColor');

btnCambiarColor.addEventListener('click', () => {

    let hexColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    
    hexColor = hexColor.padEnd(7, '0');
    
    textoColor.textContent = hexColor;
    contenedorColor.style.backgroundColor = hexColor;
});
