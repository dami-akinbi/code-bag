// example
var myStop3 = { "link": "", "start": "4:20", "end": "16:35" };
// console.log(myStop3);
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
// console.log(a, sampleArray2, c);
// example - classes and objects
var Robot = /** @class */ (function () {
    function Robot(n, c, w) {
        this.name = n;
        this.color = c;
        this.weight = w;
    }
    Robot.prototype.introduceSelf = function () {
        console.log(this.name + " is a " + this.color + " robot and weighs " + this.weight + "kg.");
        // return `${this.name} is a ${this.color} robot and weighs ${this.weight}kg.`;
    };
    return Robot;
}());
var robot = new Robot("Tom", "red", 30);
var robot2 = new Robot("Jerry", "blue", 40);
robot.lookingAt = robot2;
robot2.lookingAt = robot;
// example
var Person = /** @class */ (function () {
    function Person(n, p, s) {
        this.name = n;
        this.personality = p;
        this.isSitting = s;
    }
    Person.prototype.sitDown = function () { this.isSitting = true; };
    Person.prototype.standUp = function () { this.isSitting = false; };
    return Person;
}());
var person = new Person("Alice", "aggressive", false);
var person2 = new Person("Becky", "talkative", true);
person.robotOwned = robot;
person2.robotOwned = robot2;
person.robotOwned.introduceSelf();
person2.robotOwned.introduceSelf();
// example - linked lists
var Box = /** @class */ (function () {
    function Box(data) {
        this.data = data;
    }
    return Box;
}());
var boxA = new Box(6);
var boxB = new Box(3);
var boxC = new Box(4);
var boxD = new Box(2);
var boxE = new Box(1);
boxA.next = boxB;
boxB.next = boxC;
boxC.next = boxD;
boxD.next = boxE;
