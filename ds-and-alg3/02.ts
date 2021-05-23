// exercise - linked list
class Tile {
    data: number;
    next: Tile;
    prev: Tile; // doubly-linked list
    constructor(data: number) { this.data = data; }
}

const head: Tile = new Tile(4);
const tileB: Tile = new Tile(2);
const tileC: Tile = new Tile(3);
const tileD: Tile = new Tile(10);
// ...

head.next = tileB;
tileB.next = tileC;
tileC.next = tileD;
// ...

const countTiles = (head: Tile) => {
    let count: number = 1;
    let current: Tile = head;
    while (current.next !== null) {
        current = current.next;
        count += 1;
    }
    return `Count is ${count}`;
}
