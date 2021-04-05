// Funciones

// Declaracion de la funcion
function sumar(){
    console.log(10 + 10);
}
sumar(); // se llama a la funcion

// Expresion de la funcion
const sumar2 = function(){
    console.log(3 + 3);
}
sumar2();

// IIFE. se mandan a llamar ellas mismas
(function() {
    console.log("Esto es una funcion");
})();

