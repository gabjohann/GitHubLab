// Criando e Validando Formulários

const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');

const placeholderName = document.getElementById("name");
const placeholderEmail = document.getElementById("email");

const submitButton = document.querySelector('#submit-button');

const items = document.querySelector('.items');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === '' || emailValue === '') {
    placeholderName.placeholder = 'Name required';
    placeholderEmail.placeholder = 'Email required';
    
    return;
  }

  const liName = document.createElement('li');
  liName.classList = 'item';
  liName.textContent = `Nome: ${nameValue}`;

  const liEmail = document.createElement('li');
  liEmail.classList = 'item';
  liEmail.textContent = `Email: ${emailValue}`

 // adiciona um filho ao elemento
  items.appendChild(liName);  
  items.appendChild(liEmail);


  nameInput.value = '';
  emailInput.value = '';
  placeholderName.value = '';

  setTimeout(() => {
    items.remove();  
  }, 3000);
});