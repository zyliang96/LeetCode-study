/*
 * @lc app=leetcode.cn id=199 lang=typescript
 *
 * [199] 二叉树的右视图
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

function rightSideView(root: TreeNode | null): number[] {
  let list = [], result = [];
  if (root) {
    list.push(root);
  }
  while (list.length) {
    let temp = [];
    for (let i = 0, len = list.length; i < len; i++) {
      const data = list.shift();
      if (i === len - 1) {
        temp.push(data.val);
      }
      if (data.left) {
        list.push(data.left);
      }
      if (data.right) {
        list.push(data.right);
      }
    }
    if (temp.length) {
      result.push(temp);
    }
  }
  return result
};
// @lc code=end

