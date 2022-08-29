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
