// Programação Orientada a Objetos (POO)

class Person {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  //método
  getFullName() {
    console.log(`${this.firstName} ${this.lastName}`);
  }

  //métodos estáticos
  static speak() {
    console.log('Hello JavaScript');
  }
}

const person = new Person('Lucas', 'Johann', 19);
console.log(person);
person.getFullName();

Person.speak();

const person2 = new Person('Gabriel', 'Johann', 20);
console.log(person2);


// heranças
class Cartoon {
  constructor(name) {
    this.name = name;
  }

  characters() {
    console.log(`${this.name} is an cartoon character.`);
  }
}

class Anime extends Cartoon {
  constructor(name) {
    super(name); // chama o constructor da classe anterior
  }

  characters() {
    console.log(`${this.name} is an cartoon.`); // sobrescreve
  }
}

const cartoon = new Cartoon('Nezuko');
cartoon.characters();

const anime = new Anime('Demon Slayer');
anime.characters();