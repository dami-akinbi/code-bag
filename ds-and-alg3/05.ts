// Introduction to Trees

// example - a tree
class Tree {
    data: number;
    child: Tree;
    child2: Tree;
    child3: Tree;
}

// example - a binary tree kinda
class Tree2 {
    data: number;
    left: Tree2;
    right: Tree2;
}

function findSum2(root: Tree2) {
    if (root === null) return 0;
    return root.data + findSum2(root.left) + findSum2(root.right);
}

// example - binary search DONE
const arr: number[] = [ -2, 3, 4, 7, 8, 9, 11, 13 ];
let target = 11;
// const search = (array: number[], target: number): void => {
//     console.log(array.indexOf(target));
// }
// search(arr, target);

// example - binary search NOT DONE
const arr2: number[] = [ -2, 3, 4, 7, 8, 9, 11, 13 ];
let target2: number = 11;
const search2 = (array: number[], target: number): number => {
    let left: number = 0;
    let right: number = array.length - 1;
    while (left <= right) {
        let middle: number = Math.floor((left + right) / 2);
        if (array[middle] === target) return middle;
        else if (target < array[middle]) right = middle - 1;
        else left = middle - 1;
    }
    return -1;
}
console.log(search2(arr2, target2));
