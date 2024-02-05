function oddEven(n) {
    if (n % 2 !== 0) {
        return `Odd`;
    }
    else {
        return `Even`;
    }
}

// check result 
const result = oddEven(3);
console.log(result);