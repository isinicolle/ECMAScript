//numeric separators
const value = 100_000_000;
console.log(value);

//replace all
const text = "Hola mundo";
const newText = text.replace(/\s/g, "-");
console.log(newText);

const palabra = "Isis es una persona muy buena";
const newPalabra = palabra.replace("Isis","Isis Zapata");
console.log(newPalabra);


//promise-any y metodos privados

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola");
    }, 1000);
}
);

const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hola");
    }, 1000);
}
);

Promise.any([promise, promise2])
    .then(response => console.log(response))