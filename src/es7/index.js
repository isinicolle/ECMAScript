let numbers = [1, 2, 3, 7, 8];

if (numbers.includes(9)) {
  console.log('Si se encuentra el valor 7');
} else {
  console.log('No se encuentra.')
}

let base = 4;
let exponent = 4;
let result = base ** exponent;

console.log(result);

//object entries 
const countries = { MX: 'Mexico', US: 'United States', FR: 'France' };
console.log(Object.entries(countries));

//object values
console.log(Object.values(countries));

//sting padding
console.log('Hello'.padStart(10, 'hi! '));
console.log('Hello'.padEnd(10, 'hi! '));

//trailing commas in function arguments
function greet(name, greeting = 'Hi') {
  return `${greeting} ${name}`;
}

const array = [1, 2, 3, 4, 5, , , , 45];
console.log(array);
console.log(array.length);


//funciones asincronas
const funcionAsincrona = () => {
  return new Promise((resolve, reject) => {
  (true) ? setTimeout(() => resolve('Hola'), 3000) : reject(new Error('Error'));
  }
  );
}

const anotherFunction = async () => {
  const something = await funcionAsincrona();
  console.log(something);
}

anotherFunction();