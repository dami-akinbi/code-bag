// recursion - factorial function
var fact = function (n) {
    if (n === 0)
        return 1;
    else
        return n * fact(n - 1);
};
console.log(fact(4));
var factZeroToTen = [];
for (var i = 0; i <= 10; i++) {
    factZeroToTen.push(fact(i));
}
// console.log(`Factorial (0 - 10): ${factZeroToTen}.`);
// recursion - the fibonacci sequence
var fib = function (n) {
    if (n === 1 || n === 2)
        return 1;
    else
        return fib(n - 2) + fib(n - 1);
};
console.log(fib(3));
var fibOneToTen = [];
for (var i = 1; i <= 10; i++) {
    fibOneToTen.push(fib(i));
}
// console.log(`Fibonacci (1 - 10): ${fibOneToTen}.`);
// recursion - frog word problem
