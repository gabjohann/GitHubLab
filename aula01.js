/* TIPOS DE DADOS */

//Strings

// declaração das constantes
const message = 'Hello World';

console.log(message.length);

const firstName = 'Lucas Gabriel';
const lastName = 'Fernandes Johann';

const names = 'Lucas,Gabriel,Anakin';

// concatenação 
console.log('Meu nome é ' + firstName + ' ' + lastName);

console.log(`Meu nome é ${firstName} ${lastName}`); //t

// maiúsculo e minúsculo
console.log(`${firstName.toUpperCase()} ${lastName.toLowerCase()}`);

// split 
console.log(names.split(",")); //por palavras
console.log(names.split(""));  //por letras


// Números

const number = 5;

console.log(number + 10); //soma 
console.log(number - 10); // subtração
console.log(number * 2);  // multiplicação
console.log(number / 2);  //divisão

console.log(number.toString()); // conversão para string

// verificação do tipo de dado
console.log(typeof number.toString()); 
console.log(typeof number); 


// Booleanos

console.log(2 == 3); // false
console.log(2 == 2); // true


// Mulo e Indefinido 

const x = null; 

const y = undefined; 


// Listas

const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const object = {name: 'Lucas Gabriel'};