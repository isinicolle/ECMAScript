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


    //metodos privados
    // declaracion de una clase
class User {};
// genera una instancia
//const newUser = new User ();

class user {
 // metodos
greeting() {
    return "hello";
}
};

const gndx = new user();
console.log(gndx.greeting());
const bebeloper = new user();
console.log(bebeloper.greeting());

// constructor

class user { 
    constructor() {
        console.log("Nuevo usuario");
    }
    greeting() {
        return "hello";
    }
}

const david = new user();

// this

class user {
    constructor(name) {
        this.name = name;
    }
    // metodos
    speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }
}
const ana = new user("Ana");
console.log(ana.greeting());

// setters getters

class user {
    //constructor
    constructor(name, age) {
        this.name = name;
        this.age = age
    }
    // metodos
    #speak() {
        return "Hello";
    }
    greeting() {
        return `${this.speak()} ${this.name}`;
    }

    get #uAge() {
        return this.age;
    }
    set #uAge(n) {
        this.age = n;
    }
}

const bebeloper1 = new user ("david", 15);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 20);