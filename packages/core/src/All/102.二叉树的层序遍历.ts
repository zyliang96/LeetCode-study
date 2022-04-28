/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

function levelOrder(root: TreeNode | null): number[][] {
  let list = [];
  let result = [];
  list.push(root);
  while (list.length) {
    let temp = []
    for (let i = 0, len = list.length; i < len; i++) {
      const data = list.shift();
      if (data) {
        // console.log(data.left, data.right)
        temp.push(data.val);
        list.push(data.left);
        list.push(data.right);
      }
    }
    if (temp.length) {
      result.push(temp);
    }
  }
  return result;
};
// @lc code=end

