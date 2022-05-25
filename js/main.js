//Botón tema claro y oscuro
let modoOscuro = localStorage.getItem('modoOscuro'); 

const modoOscuroToggle = document.querySelector('#dark-mode-toggle');

const enablemodoOscuro = () => {
  document.body.classList.add('modoOscuro');
  localStorage.setItem('modoOscuro', 'enabled');
}

const disablemodoOscuro = () => {
  document.body.classList.remove('modoOscuro');
  localStorage.setItem('modoOscuro', null);
}
 
if (modoOscuro === 'enabled') {
  enablemodoOscuro();
}

// Al hacer click
botonOscuro.addEventListener('click', () => {
  modoOscuro = localStorage.getItem('modoOscuro'); 
  if (modoOscuro !== 'enabled') {
    enablemodoOscuro(); 
  } else {  
    disablemodoOscuro(); 
  }
});