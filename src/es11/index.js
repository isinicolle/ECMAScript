//optional chaining , validamos y no rompemos el flujo de la aplicacion
const user = {
    name: 'John',
    surname: 'Doe',
    age: 30,
    address: {
        city: 'New York',
        country: 'USA'
    }
}
 console.log(user.address.city)

 console.log(user?.address?.city) //optional chaining

 // BigInt y Nullish

 const bignumber = 81979083289203n;
 const otrobignumber = BigInt(81979083289203);

    console.log(bignumber)
    console.log(otrobignumber)


//NULLISH   
const nullish = null;
const validar = nullish ?? 'default';
console.log(validar)

//promise allSettled
const promise1 = new Promise((resolve, reject) => reject("Reject"));
const promise2 = new Promise((resolve, reject) => resolve("Resolve"));
const promise3 = new Promise((resolve, reject) => resolve("Resolve 2"));

const promiseallSettled = Promise.allSettled([
   promise1,
   promise2,
    promise3
])
.then(response => console.log(response));

// globalThis y matchAll
console.log(globalThis)

//matchall
const regex = /\b(Apple)+\b/g;

const fruits = "Apple, Apple, Apple, Apple, Orange, Apple";

for (const match of fruits.matchAll(regex)) {
    console.log(match);
}