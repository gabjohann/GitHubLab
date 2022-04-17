const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const submitButton = document.querySelector('#submit-button');

const errorMessage = document.querySelector('.msg');

const items = document.querySelector('.items');

submitButton.addEventListener('click', (event) => {
  event.preventDefault();

  const nameValue = nameInput.value;
  const emailValue = emailInput.value;

  if (nameValue === '' || emailValue === '') {
    errorMessage.textContent = 'Please fill out the fields!';
    errorMessage.classList = 'error';

    setTimeout(() => {
      errorMessage.textContent = ''; 
      errorMessage.classList = '';
    }, 3000);

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
});