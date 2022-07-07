
//antes
function nuevaFuncion(name,age,country) {
var name = name || 'oscar';
var age = age || 23;
var country = country || 'MX';

    console.log(name,age,country);
}


//es6
function nuevaFuncion(name='oscar',age=23,country='MX') {
    console.log(name,age,country);
}

nuevaFuncion();
nuevaFuncion('juan',30,'USA');


