function simpleEvenOdd(n) {
    if (n % 2 !== 0) {
        return n * 2;
    }
    else {
        return n / 2;
    }
}
const output = simpleEvenOdd(3);
console.log(output);