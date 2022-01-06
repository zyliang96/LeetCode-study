/**
 * 地址
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function TreeNode(val) {
//     this.val = val;
//     this.left = this.right = null;
// }

class TreeNode {
    val: number;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val === undefined ? 0 : val;
        this.left = left === undefined ? null : left;
        this.right = right === undefined ? null : right;
    }
}

function createTreeNode(list: Array<number>): TreeNode {
    let result: TreeNode | null = null;
    let queue: TreeNode[] = [];
    if (Array.isArray(list) && list.length > 0) {
        let k: number = 1;
        result = new TreeNode(list[0]);
        queue.push(result);
        while (queue.length) {
            for (let i = 0, len = queue.length; i < len; i++) {
                const target: TreeNode = queue.shift();
                const leftNum: number = Math.pow(2, k) + 2 * i - 1;
                const rightNum: number = Math.pow(2, k) + 2 * i;
                if (list[leftNum]) {
                    target.left = new TreeNode(list[leftNum]);
                    queue.push(target.left);
                }
                if (list[rightNum]) {
                    target.right = new TreeNode(list[rightNum]);
                    queue.push(target.right);
                }
            }
            k++;
        }
    }
    return result;
}

/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
    let queue: Array<TreeNode> = [];
    let result: number[][] = [];
    if (root) {
        queue.push(root);
    }
    while (queue.length > 0) {
        let temp: Array<number> = [];
        for (let i = 0, len = queue.length; i < len; i++) {
            const target: TreeNode | null = queue.shift();
            temp.push(target.val);
            if (target.left) {
                queue.push(target.left);
            }
            if (target.right) {
                queue.push(target.right);
            }
        }
        result.push(temp);
    }
    return result;
}

let list: number[] = [3, 9, 20, null, null, 15, 7];
const root: TreeNode = createTreeNode(list);
console.log(root);
let data: number[][] = levelOrder(root);
console.log(data);
