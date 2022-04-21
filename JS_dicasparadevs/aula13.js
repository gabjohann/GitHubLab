// Eventos

const submitButton = document.querySelector('#submit-button');

const myForm = document.querySelector('#my-form');

const addUserText = document.getElementById('add-user');

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const items = document.querySelector('.items');

// retorna ao clicar
submitButton.addEventListener('click', function(event) {
  event.preventDefault(); // desabilita o auto reload do submit
  console.log(event);
  console.log('clicked!');

  const nameValue = nameInput.value;
  console.log(nameValue);

  const emailValue = emailInput.value;
  if(nameValue === '' || emailValue === '') {
    return alert('Please fill out all the required fields!');
  }

  myForm.style.background = '#836FFF'; 
  addUserText.style.color = '#FFFFFF';


  items.firstElementChild.textContent = nameValue;
  items.children[1].textContent = emailValue;
  items.lastElementChild.textContent = 'Congratulations!';
});

// retorna quando houver mudança
nameInput.addEventListener('change', (event) => console.log(event.target.value));
