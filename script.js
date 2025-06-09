const carta = document.getElementById('carta');

carta.addEventListener('click', (e) => {
    if (e.target.closest('.formulario-carta')) return;
    carta.querySelector('.carta').classList.toggle('flipped');
});

const formulario = document.querySelector('.formulario-carta');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    carta.querySelector('.carta').classList.remove('flipped');
    formulario.reset();
});