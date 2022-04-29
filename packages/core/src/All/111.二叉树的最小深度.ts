/*
 * @lc app=leetcode.cn id=111 lang=typescript
 *
 * [111] 二叉树的最小深度
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

function minDepth(root: TreeNode | null): number {
  let list = [];
  if (root) {
    list.push(root)
  }
  let loop = 0
  while (list.length) {
    let len = list.length;
    loop++
    for (let i = 0; i < len; i++) {
      const data = list.shift();
      if (!data.left && !data.right) {
        list = []
        break;
      }
      if (data.left) {
        list.push(data.left);
      }
      if (data.right) {
        list.push(data.right);
      }
    }
  }
  return loop
};
// @lc code=end

