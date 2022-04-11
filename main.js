// JSON

const user = [
  {
    id: 1, 
    name: 'Lucas', 
    age: 19
  },
  {
    id: 2, 
    name: 'Gabriel', 
    age: 20
  },
  {
    id: 1, 
    name: 'Anakin', 
    age: 22
  },
];

// conversão para JSON
const userJSON = JSON.stringify(user);

// conversão para listas
const userList = JSON.parse(userJSON);
console.log(userList);