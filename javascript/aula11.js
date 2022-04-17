// Selecionar Elementos da DOM 

// selecionar somente um elemento 

// getElementById retorna uma referência ao elemento 
const addUserText = document.getElementById('add-user');
console.log(addUserText); // retorna ao que esta atrelado este ID

addUserText.innerText = 'Adicionar usuário'; // troca o dado de H1

// querySelector retorna o elemento 
const addUserText2 = document.querySelector('#add-user'); // # significa que é um ID
addUserText2.textContent = 'Adicionar usuário'; // troca o dado de H1
console.log(addUserText2); 

// getElementById não permitira selecionar este elemento 
const myForm = document.querySelector(".container #my-form");
console.log(myForm);


// selecionar múltiplos elementos 

const allItems = document.querySelectorAll('.item');
console.log(allItems);
//permite selecionar um item da lista
//console.log(allItems[1]);

// retorna um HTMLCollection, o qual não permite o uso de métodos de listas
const allItems2 = document.getElementsByClassName('item');
console.log(allItems2);

const allItems3 = document.getElementsByTagName('li');
console.log(allItems3);


const addUserText = document.getElementById('add-user');
console.log(addUserText); // retorna ao que esta atrelado este ID


addUserText.innerText = 'Adicionar usuário'; // troca o dado de H1


const addUserText = document.querySelector('#add-user'); // # significa que é um ID
console.log(addUserText); // retorna ao que est
