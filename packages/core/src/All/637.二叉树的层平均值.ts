/*
 * @lc app=leetcode.cn id=637 lang=typescript
 *
 * [637] 二叉树的层平均值
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

function averageOfLevels(root: TreeNode | null): number[] {
  let list = [], result = [];
  list.push(root);
  while (list.length) {
    let sum = 0;
    let len = list.length
    for (let i = 0; i < len; i++) {
      const data = list.shift();
      if (data) {
        sum += data.val
      }
      if (data.left) {
        list.push(data.left);
      }
      if (data.right) {
        list.push(data.right);
      }
    }
    result.push(sum / len);
  }
  return result
};
// @lc code=end

