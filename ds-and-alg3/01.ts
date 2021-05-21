// example
const myStop3: object = { "link": "", "start": "4:20", "end": "16:35" };
console.log(myStop3);

// example
// arrays
const mixed : any[] = [ "ahhh", 3, 2, 1, "ohhh" ];
// console.log(mixed);

const sampleArray: number[] = [ 2, 4, 6, 8, 100 ];
sampleArray[0] = 20;
sampleArray[1] = -5;
// console.log(sampleArray);

let a: number = 1;
let sampleArray2: number[] = [ 5, 3, 20 ];
let c: number = 4;
console.log(a, sampleArray2, c);

// example
class Robot {
    name: string;
    color: string;
    weight: number;

    constructor(n: string, c: string, w: number) {
        this.name = n;
        this.color = c;
        this.weight = w;
    }

    introduceSelf() {
        return `Hi, I am ${this.name} with a color of ${this.color} and I weigh ${this.weight}`;
    }
}
