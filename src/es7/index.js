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

