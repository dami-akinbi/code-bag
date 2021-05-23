// Big O notation and Time complexity
// example
// const given_array: number[] = [ 1, 4, 3, 2, 10 ];
// let sum = 0;
// for (let i: number = 0; i < given_array.length; i++) {
//     sum += given_array[i];
// }
// console.log(`Sum of ${given_array} is ${sum}.`)
// example - a function to add elements of an array
var findSum = function (sampleArray) {
    var sum = 0;
    for (var _i = 0, sampleArray_1 = sampleArray; _i < sampleArray_1.length; _i++) {
        var value = sampleArray_1[_i];
        sum += value;
    }
    return sum;
};
// console.log(findSum([ 1, 4, 3, 2, 10 ]));
// example - a cumulative array PERSONAL
var cumulativeSum = function (sampleArray) {
    var sum = sampleArray[0];
    var finalArray = [sum];
    for (var i = 1; i < sampleArray.length; i++) {
        sum += sampleArray[i];
        finalArray.push(sum);
    }
    return finalArray;
};
// console.log(`Sample array`);
var sampleArray = [1, 2, 3, 4, 5, 6];
// console.log(sampleArray);
// console.log(`Final array`);
// console.log(cumulativeSum(sampleArray));
// exmaple - stupid function
var given_array2 = [1, 2, 3, 40];
function stupidFunction(sampleArray) {
    var total = 1;
    return total;
}
// console.log(stupidFunction([ 2, 4, 8 ]));
// example - big O notation and time complexity
var array2 = [
    [1, 1, 1],
    [2, 2, 2],
    [3, 3, 3]
];
array2 = [
    [1, 4, 3],
    [3, 1, 9],
    [0, 5, 2]
];
array2 = [
    [1, 4, 3, 1],
    [3, 1, 9, 4],
    [0, 5, 2, 6],
    [4, 5, 7, 8]
];
var sumArray = function (sampleArray) {
    var sum = 0;
    for (var i = 0; i < sampleArray.length; i++) {
        for (var j = 0; j < sampleArray.length; j++)
            sum += sampleArray[i][j];
    }
    return sum;
};
console.log(sumArray(array2));
