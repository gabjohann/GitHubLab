// Condicionais


// == verifica o valor
// === verifica o tipo
const sum = 1 + 1;

// if e else
if( sum === 2) { 
  console.log('Sum is 2!');
} else {
  console.log('Sum is not 2!');
}


// else  if 
const number = 10;

if (number === 2) {
  console.log('Number is 2!');
} else if (number === 3) {
  console.log('Number is 3!');
} else {
  console.log('Number unknown!');
}

// && || 
const sum1 = 2 + 2;
const sum2 = 3 + 3; 

if (sum1 === 4 && sum2 === 6) {
  console.log('Sum1 is 4 and Sum2 is 6!');
}

if (sum1 === 4 || sum2 === 2) {
  console.log('Sum1 is 4 or Sum2 is 6!');
}

let num; 
let divider = 10 / 2;

if (divider === 5) {
  num = 5;
} else {
  num = 4;
}

console.log(num);

// operadores ternários
const pi = 3.14
let result = pi === 3.14 ? 3.14 : 314;

console.log(result);


// switch case 

const serie = 'Once Upon a Time'; 

switch (serie) {
  case 'Once upon a Time':
    console.log('My favorite serie!');
    break;
  case 'Orange is The New Black':
    console.log('A good serie!');
    break; 
  case 'Station 19':
    console.log('I am exciting for the next season!');
    break;
}
