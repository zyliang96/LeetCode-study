/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) {
    return false
  }
  // 实际上就是外侧比对 内侧比对，然后传递下去，但是需要判断为空的情况
  function symmetric(left, right) {
    if (!left && !right) {
      // 全为null的情况
      return true
    } else if (!left || !right) {
      // 一个位null的情况
      return false
    } else if (left.val !== right.val) {
      // 值不相等的情况
      return false
    } else {
      // 值相等的情况下需要根据其内外测比对继续判断
      let isSame1 = symmetric(left.left, right.right)
      let isSame2 = symmetric(left.right, right.left)
      return isSame1 && isSame2
    }
  }
  return symmetric(root.left, root.right)
};
// @lc code=end

