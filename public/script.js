// FUNCIONES SECCION LOGIN

// Funcion para limitar los dni en el login y registro
function limitarLongitud(input) {
  // Verificamos si la cantidad de caracteres ingresados supera el máximo permitido
  if (input.value.length > parseInt(input.maxLength)) {
    
    // Si se supera, recortamos el valor del input hasta el límite máximo
    // .slice(0, maxLength) toma desde el carácter 0 hasta el número indicado (sin incluirlo)
    input.value = input.value.slice(0, parseInt(input.maxLength));
  }
}



// FUNCIONES SECCION REGISTRO

// Esto inicializa el calendario en el input con id "fechaPersonalizada"
// flatpickr("#fechaPersonalizada", {
//   dateFormat: "Y-m-d",   // Formato de la fecha (podés cambiarlo)
//   altInput: true,        // Muestra una vista más amigable
//   altFormat: "d/m/Y",    // Formato visible si usás altInput
//   allowInput: true       // Permite escribir manualmente también
// });




// Pasar valores a string
// const dni = inputDni.value.toString();  // Asegurás que se trate como string







// FUNCIONES SECCION AGENDAR TURNO

// Funcion para agendar el turno
const form = document.querySelector('.Turno__Form');
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
    const selectHora = document.querySelector('#horarioTurno');
    const option = document.createElement('option');
    option.value = horario; // Toma el valor de cada hora
    option.textContent = horario; // Agrega el texto de cada hora
    selectHora.appendChild(option); // Agrega al final de cada option el siguiente en cada iteracion
  }
}

renderHorariosDisponibles();


// Funcion para actualizar la fecha a la del dia en el que se use en los turnos
// Esta función se ejecuta automáticamente cuando se carga toda la página
window.onload = function () {
  // Creamos un objeto Date con la fecha y hora actual
  const hoy = new Date();

  // Convertimos la fecha al formato ISO (ej: "2025-07-21T18:00:00.000Z")
  // y nos quedamos solo con la parte de la fecha, sin la hora
  const fechaFormateada = hoy.toISOString().split("T")[0]; // ej: "2025-07-21"

  // Seleccionamos el input de tipo fecha por su ID
  const inputFecha = document.getElementById("fecha-turno");

  // Establecemos la fecha mínima que se puede seleccionar (hoy)
  inputFecha.setAttribute("min", fechaFormateada);

  // (Opcional) Establecemos que el valor inicial también sea hoy
  inputFecha.value = fechaFormateada;
};




// FUNCIONES SECCION MIS TURNOS










// HTML DINAMICO
// VA A CAMBIAR
// Funcion HTML dinamico
// const agendarTurno = document.querySelector('')
// Secciones dentro de la pagina
const login = document.querySelector('#login');
const register = document.querySelector('#register');

const agendarTurno = document.querySelector('#agendarTurno');
const misTurnos = document.querySelector('#misTurnos');

// Sección Login
const loginButton = document.querySelector('#loginButton');
loginButton.addEventListener('click', (e)=>{
  e.preventDefault();
  const loginDNI = document.querySelector('#loginDNI');
  const loginPassword = document.querySelector('#loginPassword');
  if(loginDNI.value === "" || loginPassword.value === ""){
    alert('Debe llenar los campos solicitados')
  }else{
    cambiarSeccion("agendarTurno")
  }
  const formLogin = document.querySelector('#formLogin');
  formLogin.reset();
});

const goToRegister = document.querySelector('#goToRegister');
goToRegister.addEventListener('click', (e) => {
  e.preventDefault();
  cambiarSeccion("register");
});

// Sección registro
const registerButton = document.querySelector('#registerButton');
registerButton.addEventListener('click', (e) => {
  e.preventDefault(); // evita envio real
  const formRegister = document.querySelector('#formRegister');
  const registerPassword = document.querySelector('#registerPassword');
  const repeatPassword = document.querySelector('#repeatPassword');

  if (!formRegister.checkValidity() || registerPassword.value !== repeatPassword.value){
    alert('Completa todos los campos y corrobore que las contraseñas coincidan');
    return; // frena la ejecucion aca
  }
    
  formRegister.reset();
  cambiarSeccion("login")
})

// Confirmacion de contraseñas

// Sección agendar turno
const navMisTurnos = document.querySelector('#navMisTurnos');
navMisTurnos.addEventListener('click', (e) => {
  e.preventDefault();
  cambiarSeccion("misTurnos")
})
//Sección mis turnos
const navAgendar = document.querySelector('#navAgendar');
navAgendar.addEventListener('click', (e) => {
  e.preventDefault();
  cambiarSeccion("agendarTurno")
})
// Compartido en agendar turnos y mis turnos
// Selecciono todos los elementos con clase 'logout'
const logoutElements = document.querySelectorAll('.logout');

// Le agrego el evento click a cada uno ya que al hacer uso del querySelectorAll se nos genera una lista y la debemos recorrer para que no nos de error de null
logoutElements.forEach(logout => {
  logout.addEventListener('click', (e) => {
    e.preventDefault(); // Evita que el link navegue
    cambiarSeccion("login"); // Cambio a la sección login
  });
});

// Funcion que muestra la seccion seleccionada y oculta todas las demas

function cambiarSeccion(seccionDestino) {
  const secciones = [login, register, agendarTurno, misTurnos];
  secciones.forEach(sec => sec.style.display = 'none')
  switch(seccionDestino){
    case "login":
      login.style.display = 'block';
    break;
    case "register":
      register.style.display = 'block';
      console.log(register)
    break;
    case "agendarTurno":
      agendarTurno.style.display = 'block';
    break;
    case "misTurnos":
      misTurnos.style.display = 'block';
    break;
  }
}




// MEDIAQUERY DINAMICO
// ver si con css o js

// MediaQuery dinamico formulario de agenda de turno
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


// Carga como principal la seccion del login al abrir la pagina
cambiarSeccion("login");

