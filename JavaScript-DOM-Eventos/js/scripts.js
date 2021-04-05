// Seleccionar elementos...

// QUERYSELECTOR //
const textoHeading = document.querySelector('.header__texto h2');
console.log(textoHeading);

textoHeading.textContent = 'Nuevo Heading'; // También se puede utilizar .text

// QUERYSELECTORALL //
const enlaces = document.querySelectorAll('.navegacion a');
console.log(enlaces);

// Algunas operaciones...

// Cambiar el texto
enlaces[0].textContent = 'Nuevo Texto enlace';

// Cambiar el enlace del primer enlace
enlaces[0].href = 'google.com';

// Agregar una clase...
enlaces[0].classList.add('nueva-clase');

// Eliminar una clase...
// enlaces[0].classList.remove('navegacion__enlace');


// GENERAR CODIGO HTML //
const nuevoEnlace = document.createElement('A');

console.log(nuevoEnlace);

// Un enlace tiene una clase...
nuevoEnlace.classList.add('navegacion__enlace');

// Tiene un href
nuevoEnlace.href = 'nuevo-enlace.html';

// Tiene un Texto...
nuevoEnlace.textContent = 'Un Nuevo Enlace';

// console.log(nuevoEnlace);
// Finalmente se agrega donde lo deseamos colocar...
// Tienes que seleccionar el elemento padre

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

// EVENTOS //

// Hay muchos eventos ocurriendo en tus sitios y 
// aplicaciones web, cuando un usuario da click, 
// cuando dan scroll, al presionar en un botón, 
// enviar un formulario, pero uno de los más comunes 
// es esperar a que el documento este listo...

// console.log(1);
// window.addEventListener("load", imprimir);

// window.addEventListener("load", function(){ //espera hasta que JS y los archivos que dependen del HTML estén listos
//     console.log(5);
// })
// window.onload = function(){
//     console.log(3);
// } // igual q anterior con diferente sintexis

// document.addEventListener("DOMContentLoaded", function(){
//     console.log(4)
// })

// function imprimir(){
//     console.log(2);
// }

// console.log(2);

// window.onscroll = function(evento){
//     console.log(evento) // te da mas info de un evento
// };

// REGISTRAR EVENTO A ELEMENTO HTML //
// const btnEnviar = document.querySelector(".boton--primario")
// btnEnviar.addEventListener("click", function(evento){
//     console.log(evento);
//     evento.preventDefault();
//     // util para validar formulario
//     console.log("Enviado Formulario");
// })

// EVENTOS DE INPUTS Y TEXTAREAS //
// VALIDACION DE FORMULARIOS // 

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
    // console.log(e);
    // console.log(e.target.value);

    datos[e.target.id] = e.target.value;

    console.log(datos);
}

// submit
const formulario = document.querySelector('.formulario');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();

    console.log(e);

    console.log('Di click y la página ya no recarga');

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

// function mostrarError(mensaje) {
//     const alerta = document.createElement('p');
//     alerta.textContent = mensaje;
//     alerta.classList.add('error');

//     formulario.appendChild(alerta);
//     setTimeout(() => {
//         alerta.remove();
//     }, 3000);
    
// }

// function mostrarMensaje(mensaje) {
//     const alerta = document.createElement('p');
//     alerta.textContent = mensaje;
//     alerta.classList.add('correcto');
//     formulario.appendChild(alerta);

//     setTimeout(() => {
//         alerta.remove();
//     }, 3000);
// }



