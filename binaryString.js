function countZero(str) {
    let countZero = 0;
    for (const char of str) {
        if (char[0] === "0") {
            countZero++; //increment value;
        }
    }
    return countZero;
}
const binary = '100111000101010110000000000000000000000000000000000000000000000000000000000000000000000';
console.log(countZero(binary));