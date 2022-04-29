/*
 * @lc app=leetcode.cn id=222 lang=typescript
 *
 * [222] 完全二叉树的节点个数
 */

// @lc code=start
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
// 最基本的方案，层序遍历
// function countNodes(root: TreeNode | null): number {
//   let list = [];
//   if (root) {
//     list.push(root)
//   }
//   let loop = 0
//   while (list.length) {
//     let len = list.length;
//     for (let i = 0; i < len; i++) {
//       const data = list.shift();
//       if (data) {
//         loop++
//       }
//       if (data.left) {
//         list.push(data.left);
//       }
//       if (data.right) {
//         list.push(data.right);
//       }
//     }
//   }
//   return loop
// };

function countNodes(root: TreeNode | null): number {
  if (!root) {
    return 0
  }

  let left = root.left;
  let right = root.right;
  let leftHeight = 0, rightHeight = 0;
  while (left) {
    leftHeight++;
    left = left.left
  }
  while (right) {
    rightHeight++;
    right = right.right
  }
  if (leftHeight === rightHeight) {
    return (2 << leftHeight) - 1
  }
  return countNodes(root.left) + countNodes(root.right) + 1
};
// @lc code=end

