//LET y CONST, Multilínea, Spread Operator y Desestructuración


// let y const
let lorem = ` Lorem ipsum dolor sit amet, consectetur adipiscing elit.
frase de prueba`;

console.log(lorem);

let person = {
    name: 'oscar',
    age: 23,
    country: 'MX'
}

console.log(person.name,person.age,person.country);

//destructuración
let {name,age,country} = person;
console.log(name,age,country);

//unir elementos de un array
let team1 = ['Oscar','Julian','Ricardo'];
let team2 = ['Camila','Alex','Valeria'];


let education = ['David', ...team1, ...team2];
console.log(education);

const helloWorld = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test Error'))
    });
  };

  const hello = () => {
    return 'hello!'
  }
  
  export default hello;
  
  helloWorld()
    .then(response => console.log(response))
    .catch(error => console.log(error))
    .finally(() => console.log('Finalizo'))
  
  
    const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/
    const match = regexData.exec('2018-04-20');
    const year = match[1]
    const month = match[2]
    const day = match[3]
  
    console.log(year, month, day);