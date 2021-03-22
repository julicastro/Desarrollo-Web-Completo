const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

// Eventos de los Inputs...
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

function leerTexto(e) {
    datos[e.target.id] = e.target.value;
    console.log(datos);
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log(datos);

    // Validar el Formulario...

    const { nombre, email, mensaje } = datos;

    if(nombre === '' || email === '' || mensaje === '' ) {
        mostrarAlerta('Todos los campos son obligatorios', "error");
        return; // Detiene la ejecución de esta función
    }
    mostrarAlerta('Mensaje enviado correctamente');
});

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add("correcto");
    }

    formulario.appendChild(alerta);
    setTimeout(() => {
        alerta.remove();
    }, 3000);
}