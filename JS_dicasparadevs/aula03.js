// Manipulação de listas map, filter, reduce

const numbers = [1, 2, 3, 4, 5];

// map -> percorre o array e cria um novo array com o resultado da função
const numberMultipliedByTwo = numbers.map(
  function (number) {
    return number * 2;
  }
);

console.log(numberMultipliedByTwo);

// filter -> filtra o array e cria um novo array com o resultado da função
const ages = [19, 20, 21, 22, 23];

const evenAges = ages.filter(
  function (age) {
    return age % 2 === 0; // cálculo para verificar se é par
  }
);

console.log(evenAges);


// reduce -> percorre o array e retorna o resultado da função em um único valor
const sumOfAges = ages.reduce(
  function (age, accumulator) { // accumulator é uma convenção
     return accumulator + age; 
  }, 0 // accumulator iniciou em 0 (pode ser qualquer valor), ele é o valor inicial
);

console.log(sumOfAges);