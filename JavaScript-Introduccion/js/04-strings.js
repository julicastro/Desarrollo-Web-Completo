// String o Cadenas de Texto

const tweet = 'Aprendiendo JavaScript con el curso de desarrollo web"';
const producto2 = 'Monitor HD"';
const email = 'correo@mail.com'
//const producto2 = String('Monitor 30 Pulgdas');
//const producto3 = new String('Monitor 50 Pulgadas');

// .length - Exclusivo de las cadenas. Dice extencion 
console.log(tweet.length); // typeof dice tipo de dato
console.log(producto2); 

// IndexOf (retorna posicion)
console.log(tweet.indexOf('JavaScript'));
console.log(producto2.indexOf('tablet'));
console.log(email.indexOf('@'));

// Include (retorna true o false)
console.log(tweet.includes('JavaScript'));
console.log(producto2.includes('tablet'));
console.log(email.includes('@'));
