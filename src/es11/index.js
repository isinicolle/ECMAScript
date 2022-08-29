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