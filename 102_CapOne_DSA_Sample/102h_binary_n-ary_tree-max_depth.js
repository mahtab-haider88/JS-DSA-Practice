// Binary tree / n-ary tree problem — 
// Given tree root, return e.g., max depth, level-order traversal, or validate BST.
// https://leetcode.com/problems/maximum-depth-of-binary-tree/

// Trees, DFS/BFS   
// JS
// JS — assuming tree node class { val, left, right }
function maxDepth(root) {
    if (!root) return 0;
    return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// Example usage:
// Define a simple binary tree node structure for testing
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// Create a sample binary tree: 
//      1
//     / \
//    2   3
//   /
//  4
const rootResult = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(maxDepth(rootResult)); // Output: 3       

// JS — max depth of binary tree
function maxDepthBinaryTree(root) {
    if (root === null) return 0;
    const leftDepth = maxDepthBinaryTree(root.left);
    const rightDepth = maxDepthBinaryTree(root.right);
    return Math.max(leftDepth, rightDepth) + 1;
}
// Example usage:
// Define a simple binary tree node structure for testing
function TreeNode(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
}
// Create a sample binary tree: 
//      1
//     / \
//    2   3
//   /
//  4
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3));
console.log(maxDepthBinaryTree(root)); // Output: 3

// JS — max depth of n-ary tree
function maxDepthNaryTree(root) {
    if (root === null) return 0;
    if (root.children.length === 0) return 1;
    let maxChildDepth = 0;
    for (const child of root.children) {
        const childDepth = maxDepthNaryTree(child);
        if (childDepth > maxChildDepth) {
            maxChildDepth = childDepth;
        }
    }
    return maxChildDepth + 1;
}
// Example usage:
// Define a simple n-ary tree node structure for testing
function NaryTreeNode(val, children = []) {
    this.val = val;
    this.children = children;
}
// Create a sample n-ary tree: 
//        1
//      / | \
//     2  3  4
//    / \
//   5   6
const naryRoot = new NaryTreeNode(1, [
    new NaryTreeNode(2, [new NaryTreeNode(5), new NaryTreeNode(6)]),
    new NaryTreeNode(3),
    new NaryTreeNode(4)
]);
console.log(maxDepthNaryTree(naryRoot)); // Output: 3           
// JS — validate binary search tree
function isValidBST(root, min = -Infinity, max = Infinity) {
    if (root === null) return true;
    if (root.val <= min || root.val >= max) return false;
    return isValidBST(root.left, min, root.val) && isValidBST(root.right, root.val, max);
}
// Example usage:
// Create a sample BST:
//      2
//     / \
//    1   3
const bstRoot = new TreeNode(2, new TreeNode(1), new TreeNode(3));
console.log(isValidBST(bstRoot)); // Output: true
// Create a non-BST:
//      5
//     / \
//    1   4
//       / \
//      3   6
const nonBstRoot = new TreeNode(5, new TreeNode(1), new TreeNode(4, new TreeNode(3), new TreeNode(6)));
console.log(isValidBST(nonBstRoot)); // Output: false       
// JS — level-order traversal of binary tree

function levelOrderTraversal(root) {
    const result = [];
    if (root === null) return result;
    const queue = [root];
    while (queue.length > 0) {
        const levelSize = queue.length;
        const currentLevel = [];
        for (let i = 0; i < levelSize; i++) {
            const node = queue.shift();
            currentLevel.push(node.val);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
        result.push(currentLevel);
    }
    return result;
}
// Example usage:
// Create a sample binary tree: 
//      1
//     / \
//    2   3
//   / \   \
//  4   5   6
const levelOrderRoot = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(6)));
console.log(levelOrderTraversal(levelOrderRoot)); 
// Output: [[1], [2, 3], [4, 5, 6]] 

