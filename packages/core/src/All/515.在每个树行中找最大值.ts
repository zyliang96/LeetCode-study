/*
 * @lc app=leetcode.cn id=515 lang=typescript
 *
 * [515] 在每个树行中找最大值
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

function largestValues(root: TreeNode | null): number[] {
  let list = [], result = [];
  if (root) {
    list.push(root);
  }
  while (list.length) {
    let max = Number.MIN_SAFE_INTEGER;
    let len = list.length
    for (let i = 0; i < len; i++) {
      const data = list.shift();
      max = Math.max(max, data.val)
      if (data.left) {
        list.push(data.left);
      }
      if (data.right) {
        list.push(data.right);
      }
    }
    if (max !== Number.MIN_SAFE_INTEGER) {
      result.push(max);
    }
  }
  return result
};
// @lc code=end

