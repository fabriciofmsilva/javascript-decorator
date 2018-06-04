import { Person } from './models/person.js';

const person = new Person('Flávio', 'Almeida');
person.speak('Canganceiro JavaScript');
person.getFullName();

// import { Person } from './models/person.js';

// // guardou o método original
// const method = Person.prototype.speak;

// // substitui o método por uma função
// Person.prototype.speak = function(...args) {
//   console.log(`Argumentos do método: ${args}`);
//   console.time('speak');
//   // executa o código original
//   const result = method.bind(this)(...args);
//   console.log(`Resultado do método: ${result}`);
//   console.timeEnd('speak');
//   return result;
// };

// const person = new Person('Flávio', 'Almeida');
// person.speak('Canganceiro JavaScript');
