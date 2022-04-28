/*
 * @lc app=leetcode.cn id=107 lang=typescript
 *
 * [107] 二叉树的层序遍历 II
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

function levelOrderBottom(root: TreeNode | null): number[][] {
  let list = [], result = [];
  list.push(root);
  while (list.length) {
    let temp = [];
    for (let i = 0, len = list.length; i < len; i++) {
      const data = list.shift();
      if (data) {
        temp.push(data.val);
        list.push(data.left);
        list.push(data.right);
      }
    }
    if (temp.length) {
      result.unshift(temp);
    }
  }
  return result
};
// @lc code=end

