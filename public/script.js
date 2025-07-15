const form = document.querySelector('.formulario');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  mostrarMensaje(); 
});

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

function renderHorariosDisponibles(fecha, horariosOcupados) {
  for (let minutos = 480; minutos <= 1080; minutos += 30){
    let hora = Math.floor(minutos / 60);
    let minutosEnHora = minutos % 60;
    let horaStr = hora.toString().padStart(2, '0');
    let minutoStr = minutosEnHora.toString().padStart(2, '0');
    
    let horario = `${horaStr}:${minutoStr}`;
    
    const selectHora = document.querySelector('.selectHora');
    const option = document.createElement('option');
    option.value = horario;
    option.textContent = horario;
    selectHora.appendChild(option);
  }
  if (!horariosOcupados.includes(horario)) {
  selectHora.appendChild(option);
}

}

renderHorariosDisponibles();


