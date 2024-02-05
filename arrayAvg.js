function make_avg(arrays) {
    let arrayLength = arrays.length;
    let sum = 0;
    let average = 0;
    for (element of arrays) {
        sum += element;
        average = sum / arrayLength;
    }
    return average;
}

const rahimMarks = [89, 12, 17, 85, 82, 80];
const implementFunction = make_avg(rahimMarks);
console.log(Math.floor(implementFunction));