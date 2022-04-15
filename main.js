// Conceito de Truthy & Falsy


// Falsy
const x = ''; 

console.log(!!x); // !! verifica se é verdadeiro ou falso

// uma string vazia é sempre falsa
if (x) {
  console.log(x); 
}

// 0 é sempre falso
const y = 0;
console.log(!!y); 

// valores nulos é sempre falso
const a = null;
console.log(!!a);

// valores indefinidos é sempre falso
const b = undefined;
console.log(!!b);

//Truthy

// uma lista vazia é sempre verdadeira
const list  = [];
console.log(!![]);

// um objeto vazio é sempre verdadeiro
const object = {};
console.log(!!object);

// negação
console.log(!list); // virou false
console.log(!object); // virou false
console.log(!a); // virou true
console.log(!b); // virou true