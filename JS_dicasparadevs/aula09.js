// Funções e Arrow Functions

function sum(a, b) {
  console.log(a + b);
}

sum(2, 2);

function div(x, y) {
  return x / y;
}

const divValue = div(10, 2);
console.log(divValue);

// valores padrões para parâmetros
function sub(c, d = 2) {
  return c - d;
}
const subValue = sub(4);
console.log(subValue);


// Arrow Functions 

const sumArrow = (j, z) => {
  return j + z;
}
const sumValue2 = sumArrow(2, 2);
console.log(sumValue2);

/* 
* MESMA FORMA QUE ACIMA
const sumArrow = (j, z) => j + z;
*/