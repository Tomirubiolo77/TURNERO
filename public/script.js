const form = document.querySelector('.formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarMensaje(); 
});

// Funcion para agregar el mensaje de se ha agendado su turno
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
    form.reset();
};

// Funcion para mostrar las horas desde las 8 hasta las 18, saltando de a 30 minutos

function renderHorariosDisponibles(fecha, horariosOcupados) {
  for (let minutos = 480; minutos <= 1080; minutos += 30){
    let hora = Math.floor(minutos / 60); 
    let minutosEnHora = minutos % 60;
    let horaStr = hora.toString().padStart(2, '0'); //  pasa la hora a string y le agrega un 0 adelante en caso de ser 8,9
    let minutoStr = minutosEnHora.toString().padStart(2, '0');// pasa las minutos a string y luego les agrega un 0 adelante si no son y 30
    
    let horario = `${horaStr}:${minutoStr}`; // toma la hora en formato de string
    
    // Crea las options con los horarios saltando de a 30 minutos
    const selectHora = document.querySelector('.selectHora');
    const option = document.createElement('option');
    option.value = horario; // Toma el valor de cada hora
    option.textContent = horario; // Agrega el texto de cada hora
    selectHora.appendChild(option); // Agrega al final de cada option el siguiente en cada iteracion
  }
}

renderHorariosDisponibles();

// MediaQuery dinamico
const mediaQuery = window.matchMedia('(max-width: 320px)');
const form1 = document.querySelector('form');

function handleMediaChange(e) {
  if (e.matches) {
    // Pantalla menor a 600px
    form1.reset(); // Limpio el formulario
    form1.style.display = 'none'; // Lo oculto si querés
  } else {
    // Pantalla mayor a 600px
    form1.style.display = 'block'; // Lo muestro
  }
}

// Escucho los cambios en el media query
mediaQuery.addEventListener('change', handleMediaChange);

// También ejecuto al cargar para aplicar el estado correcto
handleMediaChange(mediaQuery);





