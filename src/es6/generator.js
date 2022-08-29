function* iterate (array) {
    for (let value of array) {
        yield array;
    }
}

const it = iterate([1, 2, 3]);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

