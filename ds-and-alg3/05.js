// Introduction to Trees
// example - a tree
var Tree = /** @class */ (function () {
    function Tree() {
    }
    return Tree;
}());
// example - a binary tree kinda
var Tree2 = /** @class */ (function () {
    function Tree2() {
    }
    return Tree2;
}());
function findSum2(root) {
    if (root === null)
        return 0;
    return root.data + findSum2(root.left) + findSum2(root.right);
}
// example - binary search DONE
var arr = [-2, 3, 4, 7, 8, 9, 11, 13];
var target = 11;
// const search = (array: number[], target: number): void => {
//     console.log(array.indexOf(target));
// }
// search(arr, target);
// example - binary search NOT DONE
var arr2 = [-2, 3, 4, 7, 8, 9, 11, 13];
var target2 = 11;
var search2 = function (array, target) {
    var left = 0;
    var right = array.length - 1;
    while (left <= right) {
        var middle = Math.floor((left + right) / 2);
        if (array[middle] === target)
            return middle;
        else if (target < array[middle])
            right = middle - 1;
        else
            left = middle - 1;
    }
    return -1;
};
console.log(search2(arr2, target2));
