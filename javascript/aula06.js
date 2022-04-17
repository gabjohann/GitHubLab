// Loops

// index inicia com valor 0 e é somado 1 enquanto o index for menor que 10
for (let i = 0; i < 10; i++) {
  console.log(i);
}

const series = [
  'Once Upon a Time', 
  'Station 19', 
  'Orange is The New Black', 
  'Atypical'
];


//for
for (let i = 0; i < series.length; i++) {
  console.log(series[i]);
}  // se fosse somente console.log(series) iria retornar uma lista


// for of
for (let serie of series) {
  console.log(serie);
}
 

// for each
series.forEach(function (serie) {
  console.log(serie);
});

// for each permite ver o index
series.forEach(function (serie, index) {
  console.log(index + ' -> '+ serie);
});


// while 

let index = 0;

while (index < 10) {
  console.log('index é menor do que 10');
  index++; // index += 1 || index = index + 1;
}

// for in -> utilizado em objetos

const person = {
  name: 'Lucas',
  age: 19
}

for (property in person) {
  console.log(person[property]);
}