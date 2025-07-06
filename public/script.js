const form = document.querySelector('.formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarMensaje(); 
});//function (e) {
//   e.preventDefault(); // previene que se recargue la página

//   // acá validás o enviás lo que necesites
//   const mensaje = document.createElement('P');
//   mensaje.textContent = 'Su turno ha sido agendado';
//   mensaje.style.color = 'black';
//   mensaje.style.backgroundColor = 'lightblue';
//   mensaje.style.border = 'black 3px solid';
//   mensaje.style.textAlign = 'center';
  
//   form.appendChild(mensaje);
// });


// form.addEventListener('submit', function (e) {
//   e.preventDefault(); // previene que se recargue la página

//   // acá validás o enviás lo que necesites
//   alert('Se agendó tu turno');
// });


function mostrarMensaje () {
    const mensaje = document.createElement('P');
    mensaje.textContent = 'SU TURNO HA SIDO AGENDADO';
    mensaje.style.color = 'black';
    mensaje.style.backgroundColor = 'lightblue';
    mensaje.style.border = 'black 0.3rem solid';
    mensaje.style.textAlign = 'center';
    mensaje.style.fontSize = '1.2rem';
    mensaje.style.boxShadow = '0 0.4rem 0.8rem rgba(0, 0, 0, 0.3)';
    mensaje.style.padding = '1.2rem';
    mensaje.style.borderRadius = '0.8rem';

    form.appendChild(mensaje);

    setTimeout(() => {
        mensaje.remove(); // mismo tiempo que dura fadeOut
    }, 5000); // empieza fadeOut antes de los 5s
};
