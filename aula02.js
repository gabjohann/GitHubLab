//LISTAS 

// const names = ['Lucas', 'Gabriel', 'Anakin'];
const names = ['Lucas', 'Gabriel', 'Anakin', 10];

// acessar elementos da lista
const gabriel = names[1]; 
console.log(gabriel);

// adicionar elementos ao final da lista
names.push('Baelfire'); 
console.log(names);

// adicionar elementos ao inicio da lista
names.unshift(20); 
console.log(names);

// remove o primeiro elemento da lista
names.shift(20); 
console.log(names);

// remove o último elemento adicionado a lista
names.pop(); 
console.log(names);

// alterar o valor de um elemento
names[3] = 'Baelfire'; 
console.log(names);

// verifica o índice de um elemento
console.log(names.indexOf('Gabriel')); 

// ordena em ordem alfabética
const sortedNames = names.sort();
console.log(sortedNames);

//console.log(names.sort()); 

// verifica a quantidade de elementos
console.log(names.length);


// verifica se uma variável é uma lista 
const nameISArray = Array.isArray(names);
console.log(nameISArray);

//console.log(Array.isArray(names)); 