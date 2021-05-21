// example
var myStop3 = { "link": "", "start": "4:20", "end": "16:35" };
console.log(myStop3);
// example
// arrays
var mixed = ["ahhh", 3, 2, 1, "ohhh"];
// console.log(mixed);
var sampleArray = [2, 4, 6, 8, 100];
sampleArray[0] = 20;
sampleArray[1] = -5;
// console.log(sampleArray);
var a = 1;
var sampleArray2 = [5, 3, 20];
var c = 4;
console.log(a, sampleArray2, c);
// example
var Robot = /** @class */ (function () {
    function Robot(n, c, w) {
        this.name = n;
        this.color = c;
        this.weight = w;
    }
    Robot.prototype.introduceSelf = function () {
        return "Hi, I am " + this.name + " with a color of " + this.color + " and I weigh " + this.weight;
    };
    return Robot;
}());
