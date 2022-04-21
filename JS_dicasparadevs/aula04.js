// Listas com Objetos
const person = {
  firstName: 'Lucas Gabriel',
  lastName: 'Fernandes Johann',
  age: 19,
  hobbies: ['ler', 'estudar', 'assistir séries'],
  dogF:  {
    name: 'Ariel',
    age: 1
  }, 
  dogM: {
    name: 'Tobe',
    age: 14
  }
};

const firstName = person.firstName;
const lastName = person.lastName;
const age = person.age;
const hobbies = person.hobbies;



// Desafio 01, acessar segundo valor da lista
//console.log(hobbies[1]);

// solução apresentada
const study = person.hobbies[1];
//console.log(study);
// Desestruturação

/* 
const { firstName, lastName, age, hobbies, dogM } = person;
// renomear propriedade
//const { firstName: primeiroNome, lastName, age, hobbies } = person;

console.log(firstName + ' ' +  lastName);
console.log(age);
console.log(hobbies);

// adicionar propriedades no objeto
person.bird = 'Ayla';

console.log(dogM); 
*/

// lista com vários objetos 

const todo = [
  {
    id: 1,
    description: 'Estudar',
    isComplete: true
  }, 
  {
    id: 2,
    description: 'Assistir anime',
    isComplete: true
  }, 
  {
    id: 3,
    description: 'Ignite',
    isComplete: false
  }
];

// Desafio 02 - acessar o último objeto
const secondDescription = todo[1];
console.log(secondDescription.description);