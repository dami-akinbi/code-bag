// exercise - linked list
var Tile = /** @class */ (function () {
    function Tile(data) {
        this.data = data;
    }
    return Tile;
}());
var head = new Tile(4);
var tileB = new Tile(2);
var tileC = new Tile(3);
var tileD = new Tile(10);
// ...
head.next = tileB;
tileB.next = tileC;
tileC.next = tileD;
// ...
var countTiles = function (head) {
    var count = 1;
    var current = head;
    while (current.next !== null) {
        current = current.next;
        count += 1;
    }
    return "Count is " + count;
};
