let arrayy = [1,2,3, [1,2,3, [1,2,3]]];

console.log(array.flat(2));

let array = [1,2,3,4,5];

console.log(array.flatMap(value => [value, value * 2]));

let hell = '        hello world';
console.log(hello);
console.log(hello.trimStart());

let hello = 'hello World       ';
console.log(hello);
console.log(hello.trimEnd());

try {

} catch {
  error
}


let entries = [["name", "oscar"], ["age", 32]];
console.log(Object.fromEntries(entries));

let mySymbl = `My Symbol`;
let symbol = Symbol(mySymbl);
console.log(symbol.description);

//flatmap y trimstart trim end

const arregloo = [1,2,3, [1,2,3 , [1,2,3]]];

//matriz
console.log(arregloo.flat(3))

//mapea y aplana y transforma
const arregloo2 = [1,2,3,4,5,6,7]
console.log(arregloo2.flatMap(v => [v,v*2] ))

//trimstart y trimend 
var hola = "  Hola  MUndo  ";
console.log(hola.trimStart())
console.log(hola.trimEnd())
