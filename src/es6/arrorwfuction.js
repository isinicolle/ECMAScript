//Arrow Functions, Promesas y Parámetros en objetos


//antes
let name = 'oscar';
let age = 23;

obj = { name:name, age:age };

//ahora
obj2 = { name, age };
console.log(obj2);


const names = [
    { name: 'oscar', age: 23 },
    { name: 'juan', age: 25 },
    { name: 'camila', age: 27 }
];

let listOfNames = names.map(function (item) {
    console.log(item.name);
})

    //arrow function son funciones anónimas
let listOfNames2 = (name , age) => {
    console.log(name,age);
}

//mas formas
const listOfNames4 = names => { console.log(names); }

//otra forma de encontrarlas
const listOfNames3 = names.map(item => item.name);


//ms amigable
const square = (x) => x * x;

/**Funciones flecha
Las funciones flecha (arrow functions) 
consiste en una función anónima con la siguiente estructura: */

//Función tradicional
function nombre (parámetros) {
    return (valorRetornado)
}

//Función flecha
const nombre = (parámetros) => {
    return (valorRetornado)
}


/**
 * 
 * Promesas
Una promesa es una forma de manejar el 
asincronismo en JavaScript. Si aún no sabes en 
qué consiste el asincronismo, no te preocupes, 
existe un curso completo de este tema.

Solamente ten presente que la clase Promise y s
us métodos then y catch fueron añadidos en ES6, por u
n problema del manejo del asincronismo con funciones desencadenantes, 
llamado Callback Hell{target="_blank"}.
 * 
*/

//js ejecuta asincronico , ejecuta elemento por elemento
const helloPromise = () => {
    return new Promise((resolve, reject) => {
        (true)
            ? setTimeout(() => resolve('Hello World'), 3000)
            : reject(new Error('Test Error'))
    });
}
const helloPromise2 = () => {
    return new Promise((resolve, reject) => {
        if(true)
      resolve('Hello World')
      else
        reject('Test Error')
    });
}
helloPromise2().then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
    