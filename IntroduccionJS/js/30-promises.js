const usuarioAutenticado = new Promise( (resolve, reject) => {
    const auth = true;

    if(auth) {
        resolve('Usuario Autenticado'); // EL PROMISE SE CUMPLE
    } else {
        reject('No se pudo iniciar sesión'); // el promise no se cumple
    }
});

usuarioAutenticado 
    .then( resultado => console.log(resultado)) // en caso de cumplir
    .catch( error => console.log(error)) // en caso de no, pa q no tire error
// esto es un try/catch pero con arrow functions

// En los Promises existen 3 valores
// Pending : No se ha cumplido pero tampoco se ha rechazado
// Fulfilled : Ya se cumplio
// Rejected : Se ha rechazado o no se pudo cumplir