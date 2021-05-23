// example
const myStop3: object = { "link": "", "start": "4:20", "end": "16:35" };
// console.log(myStop3);

// example
// arrays
const mixed: any[] = [ "ahhh", 3, 2, 1, "ohhh" ];
// console.log(mixed);

const sampleArray: number[] = [ 2, 4, 6, 8, 100 ];
sampleArray[0] = 20;
sampleArray[1] = -5;
// console.log(sampleArray);

let a: number = 1;
let sampleArray2: number[] = [ 5, 3, 20 ];
let c: number = 4;
// console.log(a, sampleArray2, c);

// example - classes and objects
class Robot {
    name: string;
    color: string;
    weight: number;
    lookingAt: Robot;

    constructor(n: string, c: string, w: number) {
        this.name = n;
        this.color = c;
        this.weight = w;
    }

    introduceSelf() {
        console.log(`${this.name} is a ${this.color} robot and weighs ${this.weight}kg.`);
        // return `${this.name} is a ${this.color} robot and weighs ${this.weight}kg.`;
    }
}

const robot: Robot = new Robot("Tom", "red", 30);
const robot2: Robot = new Robot("Jerry", "blue", 40);

robot.lookingAt = robot2;
robot2.lookingAt = robot;

// example
class Person {
    name: string;
    personality: string;
    isSitting: boolean;
    robotOwned: Robot;

    constructor(n: string, p: string, s: boolean) {
        this.name = n;
        this.personality = p;
        this.isSitting = s;
    }

    sitDown() { this.isSitting = true; }
    standUp() { this.isSitting = false; }
}

const person: Person = new Person("Alice", "aggressive", false);
const person2: Person = new Person("Becky", "talkative", true);

person.robotOwned = robot;
person2.robotOwned = robot2;

person.robotOwned.introduceSelf();
person2.robotOwned.introduceSelf();

// example - linked lists
class Box {
    data: number;
    next: Box;

    constructor(data: number) {
        this.data = data;
    }
}

const boxA: Box = new Box(6);
const boxB: Box = new Box(3);
const boxC: Box = new Box(4);
const boxD: Box = new Box(2);
const boxE: Box = new Box(1);

boxA.next = boxB;
boxB.next = boxC;
boxC.next = boxD;
boxD.next = boxE;
