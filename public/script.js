const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  e.preventDefault(); // previene que se recargue la página

  // acá validás o enviás lo que necesites
  const mensaje = document.createElement('P');
  mensaje.textContent = 'Su turno ha sido agendado';
  mensaje.style.color = 'black';
  mensaje.style.backgroundColor = 'lightblue';
  mensaje.style.border = 'black 3px solid';
  mensaje.style.textAlign = 'center';
  
  form.appendChild(mensaje);
});


// form.addEventListener('submit', function (e) {
//   e.preventDefault(); // previene que se recargue la página

//   // acá validás o enviás lo que necesites
//   alert('Se agendó tu turno');
// });
