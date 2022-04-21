// Manipulando elementos da DOM

const items = document.querySelector('.items');
console.log(items);

/* items.remove(); // remove todos os items 
items.firstElementChild.remove(); // remove o primeiro item
items.lastElementChild.remove(); // remove o último item */

items.children[0].textContent = 'Primeiro item'; // muda o texto do elemento selecionado

items.lastElementChild.innerHTML = '<h2>Mudei</h2>'; // muda o HTML 

const button = document.querySelector('.btn'); 

button.style.background =  '#836FFF'; // muda a cor do botão